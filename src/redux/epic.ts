import { newRoundEpic } from './epics/newRoundEpic'
import { catchError } from 'rxjs/operators'
import { completeRoundEpic } from './epics/completeRoundEpic'
import { merge, Observable } from "rxjs";
import { Action } from "@reduxjs/toolkit";
import { Epic } from "redux-observable";
// Import Epics Here (do not delete this line)

type AppEpic = (action$: Observable<Action>) => Observable<Action>;

const epics: AppEpic[] = [
	newRoundEpic,
	completeRoundEpic,
	// Add Epics Here (do not delete this line)
];

const rootEpic: Epic<Action, Action> = (action$) =>
	merge(...epics.map((epic) => epic(action$))).pipe(
		catchError((error, source) => {
			console.error(error);
			return source;
		}),
	);

export default rootEpic
