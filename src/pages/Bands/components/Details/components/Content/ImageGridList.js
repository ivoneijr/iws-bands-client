import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const filterAlbums = (band, albums) =>
  albums.filter(album => band.albums.includes(album.id));

const ImageGridList = ({ band, albums }) => {
  const classes = useStyles();
  const filteredAlbums = filterAlbums(band, albums);

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {filteredAlbums.map(album => (
          <GridListTile key={album.id}>
            <img src={album.image} alt={album.name} />
            <GridListTileBar title={album.name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default ImageGridList;
