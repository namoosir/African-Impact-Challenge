import { ReactComponent as SvgDocument } from 'svgs/document_icon.svg'

const SingleDoc = ({document_url}) => {
    return (
        <div className="document_single">
            <SvgDocument/> <br/>
            <a href={document_url} target="_blank">{document_url.split('/').reverse()[0]}</a>
        </div>
    )
}

export default SingleDoc
