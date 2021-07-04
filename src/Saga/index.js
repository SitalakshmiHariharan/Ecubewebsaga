import axios from 'axios';
import { put, takeLatest, all } from 'redux-saga/effects';

/*********** FOR THE MOVIE SLIDER SECTION ************/
function* sliderData(){
    console.log("It has reached the sliderData in saga")
    try{
        const data = yield axios.get(`http://localhost:6700/movies`)
            .then(response => response.data)

        yield put ({type:'SLIDER_DATA', json:data})
    }
    catch(error){
        console.log("There was an error", error)
    }
}

/*********** FOR THE RECOMMENDED MOVIE SECTION ************/
function* recomMovies(){
    console.log("Inside the Recommended Movies saga")
    try{
        const data = yield axios.get(`http://localhost:6700/recommended`)
        .then(response => response.data);    

        yield put({type:'RECOM_MOVIES',json:data})
    }
    catch(error){
        console.log("There was an error", error)
    }    
}

function* latestMovies(){
    console.log("Inside the Latest Movies saga")
    try{
        const data = yield axios.get(`http://localhost:6700/latest`)
        .then(response => response.data);    

        yield put({type:'LATEST_MOVIES',json:data})
    }
    catch(error){
        console.log("There was an error", error)
    }        
}

function* upcomingMovies(){
    console.log("Inside the Upcoming Movies saga")
    try{
        const data = yield axios.get(`http://localhost:6700/upcomingMovies`)
        .then(response => response.data);    

        yield put({type:'UPCOMING_MOVIES',json:data})
    }
    catch(error){
        console.log("There was an error", error)
    }        
}

function* nearbyEvents() {
    console.log("Inside the Nearby Events action")
    try{
        const data = yield axios.get(`http://localhost:6700/events`)
        .then(response => response.data);    

        yield put({type:'NEARBY_EVENTS',json:data})
    }
    catch(error){
        console.log("There was an error", error)
    }          
}

  
function* actionWatcher (){
    console.log("Inside the actionwatcher")
    yield takeLatest('GET_SLIDER_DATA', sliderData )
    yield takeLatest('GET_RECOM_MOVIES', recomMovies )
    yield takeLatest('GET_LATEST_MOVIES', latestMovies )
    yield takeLatest('GET_UPCOMING_MOVIES', upcomingMovies )
    yield takeLatest('GET_NEARBY_EVENTS', nearbyEvents )
}

export default function* rootSaga(){
    console.log("Inside the rootsaga")
    yield all([
        actionWatcher(),
    ]);
}



