import styled from "styled-components";
import videoThumbnail from "../assets/marcelo_adnet2.webp"

const Container = styled.div`

.flex>div{
    &:first-child{
        width: 70%;
        position: relative;

        video{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    width: 30%;


    h1{
        width: 50%;
    }
}


.image_container{
    display: flex;
    width: 100%;
    
    img{
        border-radius: 10px;
        height: 450px;
    }
}
`;

export default function VideoSection(props) {
    return (
        <section className={"video_section " + props.class}>
            <Container className="section_container">
                <div className="flex">
                    <div>
                        <div className="image_container">
                            <img src={videoThumbnail} alt="thumbnail" />
                        </div>
                        <video></video>
                    </div>
                    <div>
                        <h1>
                            A WINNING EXPERIENCE!
                        </h1>
                        <br />
                        <p>
                            Watch our video with Marcelo Adnet.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}