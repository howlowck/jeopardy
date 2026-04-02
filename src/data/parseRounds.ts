import Papa from "papaparse";
import type { Round, Category, Question, Categories, Points } from "../types";

type CsvRow = {
	round_name: string;
	points_list: string;
	category_title: string;
	question_index: string;
	prompt: string;
	answer: string;
	daily_double: string;
};

export function parseRoundsFromCsv(csvText: string): Round[] {
	const { data } = Papa.parse<CsvRow>(csvText, {
		header: true,
		skipEmptyLines: true,
	});

	const roundMap = new Map<
		string,
		{ name: string; pointsList: Points; categories: Category[] }
	>();

	for (const row of data) {
		const roundName = row.round_name;
		const pointsList = row.points_list.split("|").map(Number) as Points;
		const questionIndex = Number(row.question_index);
		const prompt = row.prompt;
		const answer = row.answer;
		const dailyDouble = row.daily_double === "true" ? true : undefined;

		if (!roundMap.has(roundName)) {
			roundMap.set(roundName, {
				name: roundName,
				pointsList,
				categories: [],
			});
		}

		const round = roundMap.get(roundName);
		if (!round) continue;

		// question_index 0 always means the start of a fresh category
		if (questionIndex === 0) {
			round.categories.push({
				title: row.category_title,
				questions: [] as unknown as Category["questions"],
			});
		}

		const category = round.categories[round.categories.length - 1];
		const question: Question = { prompt, answer };
		if (dailyDouble) question.dailyDouble = dailyDouble;
		category.questions[questionIndex] = question;
	}

	return Array.from(roundMap.values()).map(
		({ name, pointsList, categories }) => ({
			name,
			pointsList,
			categories: categories as Categories,
		}),
	);
}
