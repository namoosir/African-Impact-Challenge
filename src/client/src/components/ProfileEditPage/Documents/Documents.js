import SingleDoc from "./SingleDoc";
import PropTypes from "prop-types";
import { ReactComponent as SvgPlus } from "../../../svgs/Plus.svg";
import banner from "../../../svgs/simple-blue.jpg";

import { connect } from "react-redux";

export const Documents = ({ user, userEdit, setUserEdit, loggedInUser }) => {
  function handleNewFile(event) {
    setUserEdit((prevState) => ({
      userEdit: {
        ...prevState.userEdit,
        typeUser: {
          ...prevState.userEdit.typeUser,
          documentFiles: [
            ...prevState.userEdit.typeUser.documentFiles,
            event.target.files[0],
          ],
        },
      },
    }));
  }

  function toggleFunding(){
    setUserEdit(prevState => ({
      userEdit: {
          ...prevState.userEdit,
          typeUser : {
            ...prevState.userEdit.typeUser,
            lookingFunding : !prevState.userEdit.typeUser.lookingFunding
          }
      }
  }))
  }

  function getDocumentURL(docName) {
    return `http://localhost:3001/profile/getDocument/${docName}`;
  }
  function getDocumentFile(docFile) {
    return URL.createObjectURL(docFile);
  }

  return (
    <div className="">
      <div className="card">
        <div className="card-body">
          <h1>Documents</h1>

          <div className="document_list">
            {userEdit.userEdit.typeUser.documents.map((document) => (
              <SingleDoc
                document={document}
                type="Name"
                user={user}
                userEdit={userEdit}
                setUserEdit={setUserEdit}
              />
            ))}
            {userEdit.userEdit.typeUser.documentFiles.map((documentFile) => (
              <SingleDoc
                document={documentFile}
                type="File"
                user={user}
                userEdit={userEdit}
                setUserEdit={setUserEdit}
              />
            ))}
            <div class="image-upload">
              <label for="file-input">
                <SvgPlus className="little-icon plus" />
              </label>

                    <div className="document_list"> 
                        {userEdit.userEdit.typeUser.documents.map((document) => (
                            <SingleDoc document={document} type="Name" user={user} userEdit={userEdit} setUserEdit={setUserEdit}/>
                        ))}
                        {userEdit.userEdit.typeUser.documentFiles.map((documentFile) => (
                            <SingleDoc document={documentFile} type="File" user={user} userEdit={userEdit} setUserEdit={setUserEdit}/>
                        ))}
                        <div class="image-upload">
                            
                            <label for="file-input">
                                <SvgPlus className="little-icon plus"/>
                            </label>

                            <input id="file-input" type="file" onChange={handleNewFile}/>
                        </div> 
                        
                    </div>

                    <div className="form-check funding-check">
                      {userEdit.userEdit.typeUser.lookingFunding ? 
                      <input className="form-check-input funding-checkbox " type="checkbox" checked onChange={toggleFunding}/>
                      : <input className="form-check-input funding-checkbox " type="checkbox" onChange={toggleFunding}/>
                      }

                      <label className="form-check-label edit_profile_funding_label">Looking for Funding</label> 
                    </div>
                      
                    
                    
           

                    
                </div>
              <input id="file-input" type="file" onChange={handleNewFile} />
            </div>
          </div>
        </div>
      </div>
  );
};

Documents.propTypes = {
  /**
   * This represents the URL of the document that will be seen
   */
  user: PropTypes.object,
};

const mapStateToProps = (state) => ({
  loggedInUser: state.user.user.sentUser,
});

export default connect(mapStateToProps, {})(Documents);
