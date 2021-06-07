
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/actions/cartaction';
const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        width: 345,
        maxHeight: 650,
        margin: 20,
        border: "1px solid green"

    },
    media: {
        height: 200,
        width: 200
    },
    titleHeight: {
        height: 50,
        textOverflow: "ellipsis",
        overflow: "hidden"
    }
});
function ProductCard(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={classes.titleHeight} gutterBottom variant="h5" component="h4">
                        {props.title}
                    </Typography>
                    {/* <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography> */}
                    <p style={{ color: "blue", font: "bold", fontSize: "18PX" }}>${props.price}</p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="contained" color="primary">
                    <Link to={`/product/${props.id}`}>View Product</Link>
                </Button>
                <Button variant="contained" color="secondary" onClick={() =>
                    dispatch(addItemToCart(props))}>
                    Add To Cart
</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;