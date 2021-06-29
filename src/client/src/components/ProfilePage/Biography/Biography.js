import PropTypes from 'prop-types';

const Biography = ({bioText}) => {
    return (
        <div className="container margins">
            <div className="card">
                <div className="card-body">
                    <h1>Biography</h1>
                    <p>{bioText}</p>
                </div>
            </div>
        </div>

        
        
    )
}

Biography.propTypes = {
    /**
     * This represents the biography of the profile
     */
    bioText: PropTypes.string
};

Biography.defaultProps = {
    bioText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consequat mattis diam, vel volutpat diam varius id. In maximus posuere ultricies. Duis aliquam dolor imperdiet mi condimentum, eget pretium ipsum convallis. Vivamus et rhoncus turpis, vitae ultricies est. Sed sit amet euismod ligula. Nam interdum urna et nunc sollicitudin condimentum. Duis ornare est urna, non luctus est rutrum vitae. Quisque euismod elementum metus non auctor. Nam ut porta erat. Proin ultricies metus massa."
};

export default Biography
