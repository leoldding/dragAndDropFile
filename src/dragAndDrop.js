import React from 'react'
import './styles.css'
import './dragAndDrop.css'

class DragAndDrop extends React.Component {
    constructor(props) {
        super(props)

        this.dragCount = 0;
        this.fileInput = React.createRef();
        this.dropZone = React.createRef();
    }

    componentDidMount() {
        this.dragCount = 0;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Handle Submit");
    }

    handleFileInput = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Handle File Input");
        this.fileInput.current.click();
    }

    handleDragEnter = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.dragCount++;
        console.log("Handle Drag Enter");
        if (!this.dropZone.current.classList.contains('dragBorder') && this.dragCount > 0) {
            this.dropZone.current.classList.add('dragBorder');
        }
    }

    handleDragLeave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.dragCount--;
        console.log("Handle Drag Leave");
        if (this.dropZone.current.classList.contains('dragBorder') && this.dragCount <= 0) {
            this.dropZone.current.classList.remove('dragBorder');
        }
    }

    handleDragOver = (event) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Handle Drag Over");
    }

    handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.dragCount = 0
        console.log("Handle Drop");
        this.dropZone.current.classList.remove('dragBorder');
    }

    render() {
        return(
            <form id={'fileUploadForm'} onSubmit={this.handleSubmit}>
                <input type={'file'} ref={this.fileInput} id={'hiddenFileInput'}/>
                <div ref={this.dropZone} className={'dragAndDrop'} onClick={this.handleFileInput}
                     onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
                    <p>Drag and Drop Here</p>
                    <p>or</p>
                    <button id={'selectFile'}>Select File</button>
                </div>
                <button>Upload File</button>
            </form>
        )
    }
}

export default DragAndDrop;