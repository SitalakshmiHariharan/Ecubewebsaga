export default function ( state = {}, action ) {
    console.log("Inside the reducer", action.type)
    switch(action.type){
        case 'GET_SLIDER_DATA':
            return { ...state, loading:true };
        case 'SLIDER_DATA':
            return { ...state, sliderData: action.json, loading:false }
        case 'GET_RECOM_MOVIES':
            return { ...state, loading:true };
        case 'RECOM_MOVIES':
            return { ...state, recomMovies: action.json, loading:false }
        case 'GET_NEARBY_EVENTS':
            return { ...state, loading:true };
        case 'NEARBY_EVENTS':
            return { ...state, nearbyEvents: action.json, loading:false }
        case 'GET_LATEST_MOVIES':
            return { ...state, loading:true };
        case 'LATEST_MOVIES':
            return { ...state, latestMovies: action.json, loading:false }
        case 'GET_UPCOMING_MOVIES':
            return { ...state, loading:true };
        case 'UPCOMING_MOVIES':
            return { ...state, upcomingMovies: action.json, loading:false }
        default:
            return state;
    }
}