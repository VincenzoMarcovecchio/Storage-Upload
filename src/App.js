import React from 'react';
// import { storage } from './firebase';
import {
  UploadFigure,
  ContainerFlex,
  RoundedDiv,
  Main,
  Fylo,
  RectangularBar,
  Meter,
  PhMeter,
  Vignette,
} from './style';

//figureout a way to calculate space left
// const storageref = storage.ref();

const App = () => {
  const [image, setImage] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [modal, setModal] = React.useState(false);

  const handleChange = () => {
    setModal(true);
  };
  //   const handleUpload = (e) => {
  //     if (e.target.files[0]) {
  //       setImage(e.target.files[0]);
  //     }
  //     const uploadTask = storage.ref(`${image.name}`).put(image);
  //     uploadTask.on(
  //       'state_changed',
  //       (snapshot) => {
  //         // const progress =
  //         //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         setLoading(true);
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         console.log('completed');
  //         setLoading(false);
  //         setModal(false);
  //       }
  //     );
  //   };

  //   const handleClose = () => {
  //     setModal(!modal);
  //   };

  return (
    <>
      <Main>
        <RoundedDiv>
          <Fylo />
          <ContainerFlex>
            <UploadFigure
              onClick={handleChange}
              loading={loading}
              folder
              open={modal}
            >
              {' '}
              {modal ? (
                <label for="file-upload" class="custom-file-upload">
                  {' '}
                  choose file
                  <input
                    id="file-upload"
                    placeholder="choose"
                    type="file"
                    // onChange={handleUpload}
                  />{' '}
                </label>
              ) : null}
            </UploadFigure>
            <UploadFigure
              onClick={handleChange}
              loading={loading}
              text
              open={modal}
            >
              {modal ? (
                <label for="file-upload" class="custom-file-upload">
                  choose file
                  <input
                    id="file-upload"
                    placeholder="choose"
                    type="file"
                    // onChange={handleUpload}
                  />{' '}
                </label>
              ) : null}
            </UploadFigure>
            <UploadFigure
              onClick={handleChange}
              loading={loading}
              cloud
              open={modal}
            >
              {modal ? (
                <label for="file-upload" class="custom-file-upload">
                  choose file
                  <input
                    id="file-upload"
                    placeholder="choose"
                    type="file"
                    // onChange={handleUpload}
                  />{' '}
                </label>
              ) : null}
            </UploadFigure>
          </ContainerFlex>
        </RoundedDiv>
        <RectangularBar>
          <div className="container">
            <p className="p">
              You’ve used <strong>815 GB</strong> of your storage
            </p>
            <Meter aria-label="storage left">
              <PhMeter value={60}></PhMeter>
            </Meter>
            <p
              style={{
                position: 'absolute',
                left: ' 1%',
                bottom: '-45%',
                color: ' hsl(0, 0%, 82%)',
              }}
            >
              0 GB
            </p>
            <p
              style={{
                position: 'absolute',
                right: '1%',
                bottom: '-45%',
                color: ' hsl(0, 0%, 82%)',
              }}
            >
              99 GB
            </p>
          </div>
          <Vignette>
            <span>185</span>
            <p>gb left</p>
          </Vignette>
        </RectangularBar>
      </Main>
    </>
  );
};

export default App;
