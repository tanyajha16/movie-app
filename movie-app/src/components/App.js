import React from 'react';
 import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {addMovies, setShowFavourites} from '../actions';

class App extends React.Component {
  componentDidMount ()
  {

    const {store}=this.props;
    store.subscribe ( () =>
    {
      console.log('updated');
      this.forceUpdate();
    });
    // here we will make an api call
    // dispatch action
    // store.dispatch({
    //  type:'ADD_MOVIES',
    //  movies:data
    // });

    store.dispatch(addMovies(data));
    console.log('STATE',this.props.store.getState());
  }
  isMovieFavourite = (movie) =>
  {
    // const {favourites}=this.props.store.getState();
    const {movies}=this.props.store.getState();
    const index=movies.favourites.indexOf(movie)
    if(index !==-1)
    {
      // found the movie
      return true;
    }
    return false;
  }
  onChangeTab = (val)=>
  {
    this.props.store.dispatch(setShowFavourites(val))

  }
  render (){
    console.log(this.props.store.getState());
     const{ movies,search} = this.props.store.getState();
   const {list,favourites,showFavourites} = movies;
  //  const {list,favourites,showFavourites} = this.props.store.getState();
  // {list:[],favourites:[]}
  // {movies:{},search:{}}

  const displayMovies=showFavourites ? favourites:list;
  console.log("render",this.props.store.getState());
  return (
    <div className="App">
      <Navbar dispatch={this.props.store.dispatch} search={search} />
      <div className="main">
        <div className="tabs">
        <div className={`tab ${showFavourites ? '':'active-tabs'}`} onClick={()  =>this.onChangeTab(false)}>Movies </div>
          <div className={`tab ${showFavourites ? 'active-tabs':''}`} onClick={() =>this.onChangeTab(true)}>Favourites </div>
          </div>
          <div className="list">
            {displayMovies.map((movie,index) =>
              (
                <MovieCard 
                movie={movie} 
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite = {this.isMovieFavourite(movie)}/>
              ))}
          </div>
          {displayMovies.length === 0 ? <div className="no-movies">no movies to display!</div>: null}
      </div>
    </div>
  );
}
}

export default App;
