
import {ADD_MOVIES,ADD_TO_FAVOURITES,REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES} from '../actions';

const initialMovieState ={
    list:[],
    favourites:[],
    showFavourites:false
}
export default function movies(state=initialMovieState,action)
{
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
                    
            default:
            return state;
    }

}

// movies(undefined,{} )