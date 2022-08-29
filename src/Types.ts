export interface currencyState {
    loading: boolean,
    payload?: Payload,
    error: boolean
}
export interface Payload {
    TRY: number | null
}
export enum ActionType {
    FETCH_START = 'FETCH_START',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_FAIL = 'FETCH_FAIL',
}

export type Action = | { type: ActionType.FETCH_START } | { type: ActionType.FETCH_SUCCESS, payload: Required<Payload> } | { type: ActionType.FETCH_FAIL }
