import 'css/main.css';

const Biography = ({bioText}) => {
    return (
        <div className="container">
            <div className="card">
                <div className="biography card-body">
                    <h1>Biography</h1>
                    <p>{bioText}</p>
                </div>
            </div>
        </div>

        
        
    )
}



export default Biography
