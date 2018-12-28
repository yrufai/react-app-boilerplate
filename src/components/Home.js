import React from "react";
import {} from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import marked from "marked"
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.preview = this.preview.bind(this);
    }
    preview(evt){
        let getData = document.querySelector(".previewerArea");
        getData.innerHTML = marked(evt.target.value);
    }

    render() {
        return (
            <div>
                <div id="editor">
                    <form className="form-group">
                        <label><FontAwesomeIcon icon={faFreeCodeCamp} size="lg" /> Editor</label>
                        <textarea className="form-control" onChange={this.preview}></textarea>
                    </form>
                </div>
                <div id="preview">
                    <label><FontAwesomeIcon icon={faFreeCodeCamp} size="lg" /> Previewer</label>
                    <div className="previewerArea" ></div>
                </div>
            </div>
        )
    }
}

export default Home;