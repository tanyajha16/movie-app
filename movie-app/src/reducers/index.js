import {combineReducers} from 'redux';
import {ADD_MOVIES,ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES,ADD_MOVIE_TO_LIST,ADD_SEARCH_RESULT} from '../actions';

const initialMoviesState ={
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state=initialMoviesState,action)
{
    console.log('MOVIES_REDUCER');
    // if(action.type === ADD_MOVIES)
    // {
        // return action.movies;
        // because action.movies is not a function right now
       
    //     return{
    //         ...state,
    //         list:action.movies
    //     }
    
    
    
    // }
    // if the type does not match in the if else condition it will return the state
    // reducers always return new state so instead of getting the new state we are returning 
    // the  previous state
    // return state;
    switch(action.type)
    {
        case ADD_MOVIES:
            return{
                ...state,
                list:action.movies
            }
            case ADD_TO_FAVOURITES:
                return{
                    ...state,
                   favourites:[action.movie,...state.favourites]
                }
                case REMOVE_FROM_FAVOURITES:
                   
                       const filteredArray =state.favourites.filter(
                           movie => movie.Title !== action.movie.Title
                       );
                       return{
                        ...state,
                        favourites:filteredArray
                       }
                       case SET_SHOW_FAVOURITES:
                       {
                           return{
                               ...state,
                               showFavourites:action.val
                           }
                        }
                           case ADD_MOVIE_TO_LIST:
                               {
                                   return{
                                       ...state,
                                       list:[action.movie,...state.list]

                                   }
                               }
                       
                    
            default:
            return state;
    }

}

const initialSearchState={
    result:{}
};
export function search (state=initialMoviesState,action)
{
    
    // console.log('SEARCH_REDUCER');
    // return state;
    switch(action.type)
    {
        case ADD_SEARCH_RESULT:
        return {
         ...state,
         result:action.movie
        }
        default:
            return state;
    }
}
const initialRootState =
{
    movies:initialMoviesState,
    search:initialSearchState

}
// export default function rootReducer(state=initialRootState,action)
// {
//     return {
//         movies:movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }
// movies(undefined,{} )

export default combineReducers({
movies:movies,
search:search
});