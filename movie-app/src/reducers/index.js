export default function movies(state=[],action)
{
    if(action.type === 'ADD_MOVIES')
    {
        return action.movies;
    }
    // if the type does not match in the if else condition it will return the state
    // reducers always return new state so instead of getting the new state we are returning 
    // the  previous state
    return state;

}
// movies(undefined,{} )