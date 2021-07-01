import { ReactComponent as SvgDocument } from 'svgs/document_icon.svg'

const SingleDoc = ({docName}) => {
    return (
        <div className="document_single">
            <p className="document_text">
                {docName}
            </p>
            <SvgDocument/>

        </div>
    )
}

export default SingleDoc
