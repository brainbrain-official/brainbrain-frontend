import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
    - The "html" element is excluded, otherwise a bug in Chrome breaks the CSS hyphens property (https://github.com/elad2412/the-new-css-reset/issues/36)
    */
    *:where(:not(html, iframe, canvas, img, svg, video, audio, svg *, symbol *)) {
        all: unset;
        display: revert;
    }

    /* Preferred box-sizing value */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Fix mobile Safari increase font-size on landscape mode */
    html {
        font-family: 'Pretendard Variable';
        font-size: 62.5%;
        text-size-adjust: none;
        -webkit-text-size-adjust: none;
    }

    body {
        font-family: 'Pretendard Variable';
        line-height: 1.5;
        background-color: ${({ theme }) => theme.color.black[0]};
        color: ${({ theme }) => theme.color.black[900]};
        font-size: 1.6rem;  /* 기본 폰트 사이즈 설정 */
    }

    /* Remove list styles (bullets/numbers) */
    ol, ul, menu, summary {
        list-style: none;
    }

    /* For images to not be able to exceed their container */
    img {
        max-inline-size: 100%;
        max-block-size: 100%;
    }

    /* Removes spacing between cells in tables */
    table {
        border-collapse: collapse;
    }

    /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
    input,
    textarea {
        user-select: auto;
    }

    /* Revert the 'white-space' property for textarea elements on Safari */
    textarea {
        white-space: revert;
    }

    /* Minimum style to allow to style meter element */
    meter {
        appearance: revert;
    }

    /* Preformatted text - use only for this feature */
    :where(pre) {
        all: revert;
        box-sizing: border-box;
    }

    /* Fix the feature of 'hidden' attribute.
       display: revert; revert to element instead of attribute */
    :where([hidden]) {
        display: none;
    }

    /* Revert for bug in Chromium browsers
       - Fix for the content editable attribute will work properly.
       - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element */
    :where([contenteditable]:not([contenteditable='false'])) {
        -moz-user-modify: read-write;
        -webkit-user-modify: read-write;
        overflow-wrap: break-word;
        line-break: after-white-space;
        user-select: auto;
    }

    /* Apply back the draggable feature - exist only in Chromium and Safari */
    :where([draggable='true']) {
        -webkit-user-drag: element;
    }

    /* Revert Modal native behavior */
    :where(dialog:modal) {
        all: revert;
        box-sizing: border-box;
    }

    /* Remove details summary webkit styles */
    ::-webkit-details-marker {
        display: none;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type='number'] {
        appearance: textfield;
    }
`;

export default GlobalStyles;
