import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import CardChar from "./CardChar";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: "400px",
    //justifyContent: "space-evenly",
    overflow: "scroll"
    //flexDirection: 'row',
  }
});

const CharactersQuery = ({page}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Query
      query={gql`
        {
          characters(page: ${page}) {
            results {
              id
              name
              image
              species
              gender
            }
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error!</p>;

        return data.characters.results.map((character) => {
          return (
            <div key={character.id}>
              <CardChar character={character}/>
            </div>
          );
        });
      }}
    </Query>
    </div>
  );
};


export default CharactersQuery;
