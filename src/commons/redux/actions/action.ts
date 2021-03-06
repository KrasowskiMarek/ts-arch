export type ActionType =
    "GET_REPORT"
    | "GET_REPORT_SUCCESS"
    | "FETCH_SURVEYS"
    | "FETCH_SURVEYS_SUCCESS"
    | "FETCH_CLIENTS_SUCCESS"
    | "FETCH_REPORT"
    | "FETCH_REPORT_SUCCESS"
    | "FETCH_REPORT_FAILED"
    | "FETCH_REPORT_COMPLAINTS_SUCCESS"
    | "FETCH_FILTERS_SUCCESS"
    | "FETCH_SCORES_SUCCESS"
    | "GET_BENCHMARK_GLOBAL_SUCCESS"
    | "SET_MAIN_REPORT"
    | "SET_ACTIVE_SURVEY_ID"
    | "SET_ACTIVE_REPORT_ID"
    | "CLEAR_FILTERS"

    | "ALERTS_ADD"
    | "ALERTS_REMOVE"

    | "FETCH_BENCHMARK_GLOBAL_SUCCESS"
    | "FETCH_BENCHMARKS_SUCCESS"
    | "SET_BENCHMARKS"
    | "CLEAR_BENCHMARKS"

    | "FETCH_GUIDANCE_PENDING"
    | "FETCH_GUIDANCE_FULFILLED"
    | "FETCH_GUIDANCE_FACTORS_SUCCESS"
    | "FETCH_GUIDANCE_UNITS_SUCCESS"
    | "CLEAR_GUIDANCE"

    | "FETCH_FACTORS_PENDING"
    | "FETCH_FACTORS_FULFILLED"
    | "FETCH_FACTORS_SUCCESS"

    | "FETCH_FACTOR_CATEGORIES_PENDING"
    | "FETCH_FACTOR_CATEGORIES_FULFILLED"
    | "FETCH_FACTOR_CATEGORIES_SUCCESS"

    | "FETCH_FACTOR_CATEGORY_PENDING"
    | "FETCH_FACTOR_CATEGORY_FULFILLED"
    | "FETCH_FACTOR_CATEGORY_SUCCESS"
    | "CLEAR_FACTOR_CATEGORY"

    | "FETCH_FACTOR_TYPES_PENDING"
    | "FETCH_FACTOR_TYPES_FULFILLED"
    | "FETCH_FACTOR_TYPES_SUCCESS"

    | "FETCH_FACTOR_TYPE_PENDING"
    | "FETCH_FACTOR_TYPE_FULFILLED"
    | "FETCH_FACTOR_TYPE_SUCCESS"
    | "CLEAR_FACTOR_TYPE"
    
    | "FETCH_LEVELS_PENDING"
    | "FETCH_LEVELS_FULFILLED"
    | "FETCH_LEVELS_SUCCESS"

    | "FETCH_LEVEL_PENDING"
    | "FETCH_LEVEL_FULFILLED"
    | "FETCH_LEVEL_SUCCESS"
    | "CLEAR_LEVEL"

    | "FETCH_CATEGORIES_PENDING"
    | "FETCH_CATEGORIES_FULFILLED"
    | "FETCH_CATEGORIES_SUCCESS"

    | "FETCH_CATEGORY_PENDING"
    | "FETCH_CATEGORY_FULFILLED"
    | "FETCH_CATEGORY_SUCCESS"
    | "CLEAR_CATEGORY"

    | "FETCH_CLIENTS_PENDING"
    | "FETCH_CLIENTS_FULFILLED"
    | "FETCH_CLIENTS_SUCCESS"
    | "CLEAR_CLIENTS"

    | "FETCH_CLIENT_PENDING"
    | "FETCH_CLIENT_FULFILLED"
    | "FETCH_CLIENT_SUCCESS"
    | "CLEAR_CLIENT"

    | "FETCH_ORGANIZATIONS_PENDING"
    | "FETCH_ORGANIZATIONS_FULFILLED"
    | "FETCH_ORGANIZATIONS_SUCCESS"
    | "CLEAR_ORGANIZATIONS"

    | "FETCH_USER_PENDING"
    | "FETCH_USER_FULFILLED"
    | "FETCH_USER_SUCCESS"
    | "CLEAR_USER"

    | "FETCH_USERS_PENDING"
    | "FETCH_USERS_FULFILLED"
    | "FETCH_USERS_SUCCESS"
    | "CLEAR_USERS"

    | "FETCH_RECOMMENDATIONS_PENDING"
    | "FETCH_RECOMMENDATIONS_FULFILLED"
    | "FETCH_RECOMMENDATIONS_SUCCESS"
    | "CLEAR_RECOMMENDATIONS"
    | "UPDATE_RECOMMENDATIONS_SORT"
    | "FETCH_TOP_RECOMMENDATIONS_SUCCESS"
    
    | "FETCH_COMPLAINT_RECOMMENDATION_PENDING"
    | "FETCH_COMPLAINT_RECOMMENDATION_FULFILLED"
    | "FETCH_COMPLAINT_RECOMMENDATION_SUCCESS"
    | "CLEAR_COMPLAINT_RECOMMENDATION"
    | "FETCH_TOP_COMPLAINT_RECOMMENDATION_SUCCESS"
    | "UPDATE_COMPLAINT_RECOMMENDATIONS_SORT"

    | "GET_LANGUAGES_SUCCESS"
    | "FETCH_LANGUAGES_SUCCESS"
    | "FETCH_MESSAGES_SUCCESS"
    | "SET_LANGUAGE_EDIT"

    | "AUTHENTICATION_IN_PROGRESS"
    | "AUTHENTICATION_FINISHED"
    | "AUTHENTICATION_FAILED"
    | "UPDATE_PROFILE"
    | "LOGOUT"
    | "LOGGED_IN"
    | "TOKEN_EXPIRED"

    | "FETCH_PROFILE_SUCCESS"
    | "FETCH_CREDENTIALS_SUCCESS"
    | "PROFILE_LOGOUT"
    | "PROFILE_CATCH_ERROR"

    | "REQUEST_FAILED"
    | "REQUEST_ISSUED"
    | "REQUEST_COMPLETED"
    | "SET_LANGUAGE"
    | "GET_PROFILE_SUCCESS"

    | "UPDATE_PASSWORD_LOADING"
    | "UPDATE_PASSWORD_FAILURE"
    | "UPDATE_PASSWORD_SUCCESS"

    | "FETCH_CLUSTERS_PENDING"
    | "FETCH_CLUSTERS_FULFILLED"
    | "FETCH_CLUSTERS_SUCCESS"
    | "CLEAR_CLUSTERS"

    | "FETCH_CLUSTER_PENDING"
    | "FETCH_CLUSTER_FULFILLED"
    | "FETCH_CLUSTER_SUCCESS"
    | "CLEAR_CLUSTER"

    | "FETCH_MEASURES_PENDING"
    | "FETCH_MEASURES_FULFILLED"
    | "FETCH_MEASURES_SUCCESS"
    | "CLEAR_MEASURES"

    | "FETCH_MEASURE_PENDING"
    | "FETCH_MEASURE_FULFILLED"
    | "FETCH_MEASURE_SUCCESS"
    | "CLEAR_MEASURE"

    | "FETCH_SECTORS_PENDING"
    | "FETCH_SECTORS_FULFILLED"
    | "FETCH_SECTORS_SUCCESS"
    | "CLEAR_SECTORS"

    | "FETCH_SECTOR_PENDING"
    | "FETCH_SECTOR_FULFILLED"
    | "FETCH_SECTOR_SUCCESS"
    | "CLEAR_SECTOR"

    | "FETCH_UNITS_PENDING"
    | "FETCH_UNITS_FULFILLED"
    | "FETCH_UNITS_SUCCESS"
    | "CLEAR_UNITS"

    | "FETCH_UNIT_PENDING"
    | "FETCH_UNIT_FULFILLED"
    | "FETCH_UNIT_SUCCESS"
    | "CLEAR_UNIT"

    | "FETCH_QSET_PENDING"
    | "FETCH_QSET_FULFILLED"
    | "FETCH_QSET_SUCCESS"
    | "CLEAR_QSET"

    | "FETCH_KPIS_PENDING"
    | "FETCH_KPIS_FULFILLED"
    | "FETCH_KPIS_SUCCESS"
    | "CLEAR_KPIS"

    | "FETCH_KPI_PENDING"
    | "FETCH_KPI_FULFILLED"
    | "FETCH_KPI_SUCCESS"
    | "CLEAR_KPI"

    | "FETCH_COMPLAINTS_PENDING"
    | "FETCH_COMPLAINTS_FULFILLED"
    | "FETCH_COMPLAINTS_SUCCESS"
    | "CLEAR_COMPLAINTS"

    | "FETCH_COMPLAINT_PENDING"
    | "FETCH_COMPLAINT_FULFILLED"
    | "FETCH_COMPLAINT_SUCCESS"
    | "CLEAR_COMPLAINT"
    ;

export interface Action<Type extends ActionType, Payload> {
    type: Type;
    payload?: Payload;
    response?: any;
}
