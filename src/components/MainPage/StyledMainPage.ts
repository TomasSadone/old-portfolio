import styled from "styled-components";

export const StyledMainPage = styled.div`
  /* min-height: calc(100vh - 87px); */
  position: relative;

  /* text section */

  .container :first-child {
    font-size: 1.25rem;
    /* line-height: 1.86rem; */
  }

  #text {
    /* padding-top: 1rem; */
    padding-bottom: 3rem;
  }

  #tomas-sadone {
    color: #0000ff;
    font-size: 4.68rem;
    font-weight: 600;

    line-height: 4rem;

    display: inline-block;
    margin: 0.5rem 0 0.5rem 0px;
  }

  #f-e-dev {
    font-size: 1.875rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    font-weight: 600;
  }

  #description {
    font-weight: 300;
  }

  #react {
    color: #ff00ff;
    font-weight: 400;
  }

  /* image */

  #image {
    margin-left: auto;
    * {
      aspect-ratio: 16/9;
      /* float: right; */
      width: 90%;
    }
  }

  /* vertical line and logos */

  div.vertical-line {
    border-left: 1px solid #fff;
    height: 40%;
    position: absolute;
    bottom: 2px;

    * {
      cursor: pointer;
    }
  }
  .vertical-line :first-child {
    //linkedin
    position: relative;
    left: -0.875rem;
    top: -6em;
  }
  .vertical-line :last-child {
    //linkedin
    position: relative;
    left: -3rem;
    top: -3rem;
  }
  img {
    width: 2rem;
    aspect-ratio: 1;
  }

  /* mail */

  #mail {
    cursor: pointer;
    color: white;
    text-decoration: none;
    position: absolute;
    transform: rotate(90deg);
    font-size: 1.125rem;
    bottom: 0px;
    right: 0; /* same as height */
    /* height: 40px; */
    transform-origin: 100% 0;
    position: absolute;
    /* line-height: 40px; same as height, for vertical centering */
  }

  /* @media */
  @media (min-width: 47rem) {
    .max-width {
      max-width: 70%;
    }
    /* #text {
      padding-top: 3rem;
    } */
  }
  @media (max-width: 35em) {
    .container {
      width: 100%;
    }
    .vertical-line {
      display: none;
    }
    #mail {
      display: none;
    }
    #image * {
      width: 100%;
    }
  }
`;
