
import React from 'react';
import './ImageZoom.css'
class ImageZoom extends React.Component {
    constructor(props) {
        super(props);
        // this.image = React.createRef();
        // this.overlay = React.createRef();
        // this.zoomInWindow = React.createRef();
        // this.zoomInImage = React.createRef();
        this.state = {
            isZoomOnSide: true,
            showOverlay: false,
            overlayLeft: 0,
            overlayTop: 0,
            zoomInLeft: 0,
            zoomInTop: 0,
            zoomInMaxWidth: 0
        };
    }
    onMouseMove = e => {
        console.log(e.clientX)
        const overlayNode = !this.overlay ? {} : document.getElementsByClassName('overlayCont')[0];
        const imageNode = !this.image ? {} : document.getElementsByClassName('OriginalImage')[0];
        const zoomInImageNode = !this.zoomInImage ? {} : document.getElementsByClassName('ZoomInWindow-Image')[0];
        const zoomInWindowNode = !this.zoomInWindow ? {} : document.getElementsByClassName('ZoomInWindow')[0];
        console.log(overlayNode)
        const zoomInWindowWidth = zoomInWindowNode.clientWidth;
        const overlayWidth = overlayNode.clientWidth || 200;
        const imageWidth = imageNode.clientWidth;
        const imageHeight = imageNode.clientHeight;
        const zoomInImageWidth = zoomInImageNode.clientWidth;
        const zoomInImageHeight = zoomInImageNode.clientHeight;
        const offsetLeft = imageNode.offsetLeft;
        const offsetTop = imageNode.offsetTop;
        const overlayLeft = Math.min(
            Math.max(
                e.clientX - overlayWidth / 2,
                offsetLeft
            ),
            offsetLeft + imageWidth - overlayWidth
        );
        const overlayTop = Math.min(
            Math.max(
                e.clientY - overlayWidth / 2,
                offsetTop
            ),
            offsetTop + imageHeight - overlayWidth
        );
        const zoomInLeft = -(overlayLeft - offsetLeft) / imageWidth * zoomInImageWidth;
        const zoomInTop = -(overlayTop - offsetTop) / imageHeight * zoomInImageHeight;
        const zoomInMaxWidth = zoomInWindowWidth / (overlayWidth / imageWidth);
        this.setState({
            overlayLeft,
            overlayTop,
            zoomInLeft,
            zoomInTop,
            zoomInMaxWidth
        });
    };
    toggleOverlay = showOverlay =>
        () => this.setState({ showOverlay: showOverlay });
    onSwitchButtonClick = () =>
        this.setState(prevState => ({
            isZoomOnSide: !prevState.isZoomOnSide
        }));
    render() {
        const {
            showOverlay,
            overlayLeft,
            overlayTop,
            zoomInLeft,
            zoomInTop,
            zoomInMaxWidth,
            isZoomOnSide
        } = this.state;
        const overlayStyle = {
            left: overlayLeft,
            top: overlayTop
        };
        const zoomInImageStyle = {
            left: zoomInLeft,
            top: zoomInTop
        };
        if (zoomInMaxWidth && isZoomOnSide) {
            zoomInImageStyle['max-width'] = zoomInMaxWidth;
        }
        return (
            <div>
                {/* <button className="SwitchButton" type="button" onClick={this.onSwitchButtonClick}>
                    {isZoomOnSide ? 'Zoom Outside' : 'Zoom Inside'}
                </button> */}
                <div
                    className="OriginalImageContainer"
                    onMouseMove={this.onMouseMove}
                    onMouseEnter={this.toggleOverlay(true)}
                    onMouseLeave={this.toggleOverlay(false)}
                >
                    <img
                        className="OriginalImage"
                        ref={(image) => this.image = image}
                        src={this.props.image}
                    />
                    {showOverlay && isZoomOnSide && (
                        <span
                            className='overlayCont'
                            ref={(overlay) => this.overlay = overlay}
                            style={overlayStyle}
                        />
                    )}
                    {showOverlay && !isZoomOnSide && (
                        <div
                            ref={(zoomInWindow) => this.zoomInWindow = zoomInWindow}
                            className="ZoomInWindowInside"
                        >
                            <img
                                className="ZoomInWindow-Image"
                                ref={(zoomInImage) => this.zoomInImage = zoomInImage}
                                style={zoomInImageStyle}
                                src={this.props.image}
                            />
                        </div>
                    )}
                </div>
                {showOverlay && isZoomOnSide && (
                    <div
                        ref={(zoomInWindow) => this.zoomInWindow = zoomInWindow}
                        className="ZoomInWindow"
                    >
                        <img
                            className="ZoomInWindow-Image"
                            ref={(zoomInImage) => this.zoomInImage = zoomInImage}
                            style={zoomInImageStyle}
                            src={this.props.image}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default ImageZoom;