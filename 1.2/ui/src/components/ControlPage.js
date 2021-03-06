import React from 'react'

const placeholder_text = "1. CPNC ⇉ Credit \n2. CPNC ⇉ CDA \n3. Debits ⇉ CDA\m"
export default class ControlPage extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="control-page-main-container">
                <div className="control-page-title-container">
                    <div className="title-text">
                        <span>Control Page</span>
                    </div>
                </div>
                <div className="job-setter-div">
                    <div className="job-setter-container">
                        <div className="container-first-row">
                            <div className="job-setter-title">
                                <div className="job-title">Set Jobs</div>
                            </div>
                            <div className="trigger-btn-div">
                                <div className="trigger-btn-container">
                                    <div className="trigger-btn">
                                        <div className="btn-text">Trigger Redundancy Mechanism</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="predef-jobs-radio-button">
                            <div className="radio-button">
                                <input type="radio" name="job-queue-type" value="predef" checked />
                                <label className="label-text">Use Predefined Job Queue</label>
                            </div>
                            <div className="radio-button">
                                <input type="radio" name="job-queue-type" value="custom" />
                                <label className="label-text">Use Custom Job Queue</label>
                            </div>
                        </div>
                        <div className="container-second-row">
                            <div className="matcher-div">
                                <select class="select-css" disabled="disabled">
                                    <option>Select the match component 1 </option>
                                    <option>CPNC Sheet</option>
                                    <option>Credits Sheet</option>
                                    <option>Debit Sheet</option>
                                    <option>CDA Sheet</option>
                                </select>
                            </div>
                            <div className="right-arrow-div">
                                {/* <div className="right-arrow">&#8649;</div> */}

                                <svg height="100" viewBox="0 -77 512 512" width="100" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m292.246094 357.222656v-81.195312h-163.1875v-194.832032h163.1875v-81.195312l219.753906 178.613281zm0 0" fill="green" />
                                    <g fill="greenyellow">
                                        <path d="m16.234375 276.027344c-8.960937 0-16.234375-7.273438-16.234375-16.234375v-162.359375c0-8.964844 7.273438-16.238282 16.234375-16.238282 8.964844 0 16.238281 7.273438 16.238281 16.238282v162.359375c0 8.960937-7.273437 16.234375-16.238281 16.234375zm0 0" />
                                        <path d="m81.179688 276.027344c-8.960938 0-16.234376-7.273438-16.234376-16.234375v-162.359375c0-8.964844 7.273438-16.238282 16.234376-16.238282 8.960937 0 16.234374 7.273438 16.234374 16.238282v162.359375c0 8.960937-7.273437 16.234375-16.234374 16.234375zm0 0" />
                                        <path d="m292.246094 357.222656v-81.195312h-163.1875v-97.414063h382.941406zm0 0" />
                                    </g>
                                </svg>









                            </div>
                            <div className="matching-div">
                                <select class="select-css" disabled="disabled">
                                    <option>Select the match component 2</option>
                                    <option>CPNC Sheet</option>
                                    <option>Credits Sheet</option>
                                    <option>Debit Sheet</option>
                                    <option>CDA Sheet</option>
                                </select>
                            </div>
                            <div className="add-button">

                            </div>
                        </div>
                        <div className="jobs-list-container">
                            <div className="job-list-title">
                                Job List
                            </div>
                            <div>
                                <textarea rows="7" cols="50" name="description">
                                    {placeholder_text}
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="result-buttons-container">
                    <div className="btn-container">
                        <button class="btn warning">
                            View DataFrames
                    <div className="btn-icon">
                                <svg id="color" enable-background="new 0 0 24 24" height="100" viewBox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m12 24c-1.228 0-12-.084-12-3v-10h24v10c0 2.916-10.772 3-12 3z" fill="#ffd54f" />
                                    <path d="m12 15c-1.228 0-12-.084-12-3v-9h24v9c0 2.916-10.772 3-12 3z" fill="#ffc107" />
                                    <path d="m12 6c-1.228 0-12-.084-12-3 0-2.916 10.772-3 12-3s12 .084 12 3-10.772 3-12 3z" fill="#ffd54f" />
                                    <path d="m0 12v9c0 2.916 10.772 3 12 3v-9c-1.228 0-12-.084-12-3z" fill="#deb945" />
                                    <path d="m0 3v9c0 2.916 10.772 3 12 3v-9c-1.228 0-12-.084-12-3z" fill="#dea806" />
                                    <path d="m12 0c-1.228 0-12 .084-12 3 0 2.916 10.772 3 12 3z" fill="#deb945" />
                                    <path d="m7 10c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" fill="#fff" />
                                    <path d="m7 19c0 1.104-.896 2-2 2s-2-.896-2-2 .896-2 2-2 2 .896 2 2z" fill="#fff" />
                                    <g fill="#dedede">
                                        <path d="m5 8c-1.104 0-2 .896-2 2s.896 2 2 2c.016 0 .031 0 .047-.001v-3.998c-.016-.001-.031-.001-.047-.001z" />
                                        <path d="m5 17c-1.104 0-2 .896-2 2s.896 2 2 2c.016 0 .031 0 .047-.001v-3.999c-.016 0-.031 0-.047 0z" />
                                    </g>
                                </svg>
                            </div>
                        </button>
                    </div>
                    <div className="btn-container">
                        <button class="btn warning">
                            View Redundancy Graphs
                            <div className="btn-icon">
                                <svg height="100" viewBox="0 0 512 512" width="100" xmlns="http://www.w3.org/2000/svg"><g><g><path d="m305 256h175v240h-448v-240h176" fill="#5f4d37" /><path d="m456 360a64.007 64.007 0 0 1 -109.26 45.26l45.26-45.26z" fill="#ffda44" /><path d="m392 296v64l-45.26 45.26a64.007 64.007 0 0 1 45.26-109.26z" fill="#ab2300" /><path d="m456 360h-64v-64a64 64 0 0 1 64 64z" fill="#91cc04" /><path d="m80 304h24v96h-24z" fill="#83d8f4" /><path d="m128 328h24v72h-24z" fill="#91cc04" /><path d="m176 352h24v48h-24z" fill="#ffda44" /><path d="m208 256h-192v-144h480v144h-191" fill="#806749" /><path d="m368 80v-16a48 48 0 0 0 -48-48h-128a48 48 0 0 0 -48 48v16h32v-16a16.019 16.019 0 0 1 16-16h128a16.019 16.019 0 0 1 16 16v16z" fill="#5f4d37" /><g fill="#cca400"><path d="m128 88h64v24h-64z" /><path d="m320 88h64v24h-64z" /><path d="m208 224h96v64h-96z" /></g></g><g><path d="m80 408h24a8 8 0 0 0 8-8v-96a8 8 0 0 0 -8-8h-24a8 8 0 0 0 -8 8v96a8 8 0 0 0 8 8zm8-96h8v80h-8z" /><path d="m128 408h24a8 8 0 0 0 8-8v-72a8 8 0 0 0 -8-8h-24a8 8 0 0 0 -8 8v72a8 8 0 0 0 8 8zm8-72h8v56h-8z" /><path d="m176 408h24a8 8 0 0 0 8-8v-48a8 8 0 0 0 -8-8h-24a8 8 0 0 0 -8 8v48a8 8 0 0 0 8 8zm8-48h8v32h-8z" /><path d="m56 432h160a8 8 0 0 0 0-16h-152v-128a8 8 0 0 0 -16 0v136a8 8 0 0 0 8 8z" /><path d="m496 104h-104v-16a8 8 0 0 0 -8-8h-8v-16a56.062 56.062 0 0 0 -56-56h-128a56.062 56.062 0 0 0 -56 56v16h-8a8 8 0 0 0 -8 8v16h-104a8 8 0 0 0 -8 8v144a8 8 0 0 0 8 8h8v232a8 8 0 0 0 8 8h448a8 8 0 0 0 8-8v-232h8a8 8 0 0 0 8-8v-144a8 8 0 0 0 -8-8zm-304-24h-8v-16a8.011 8.011 0 0 1 8-8h128a8.011 8.011 0 0 1 8 8v16h-8a8 8 0 0 0 -8 8v16h-112v-16a8 8 0 0 0 -8-8zm136 16h48v8h-48zm-176-32a40.04 40.04 0 0 1 40-40h128a40.04 40.04 0 0 1 40 40v16h-16v-16a24.032 24.032 0 0 0 -24-24h-128a24.032 24.032 0 0 0 -24 24v16h-16zm-16 32h48v8h-48zm336 392h-432v-224h160v24a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8v-24h160zm-256-208v-48h80v48zm272-32h-176v-24a8 8 0 0 0 -8-8h-96a8 8 0 0 0 -8 8v24h-176v-128h464z" /><path d="m392 288a72 72 0 1 0 72 72 72.083 72.083 0 0 0 -72-72zm8 16.58a56.11 56.11 0 0 1 47.42 47.42h-47.42zm-64 55.42a56.086 56.086 0 0 1 48-55.42v52.11l-36.83 36.83a55.708 55.708 0 0 1 -11.17-33.52zm56 56a55.708 55.708 0 0 1 -33.52-11.17l36.83-36.83h52.11a56.086 56.086 0 0 1 -55.42 48z" /><path d="m240 432h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16z" /><path d="m264 408h40a8 8 0 0 0 0-16h-40a8 8 0 0 0 0 16z" /><path d="m448 440h-112a8 8 0 0 0 -5.657 2.343l-21.657 21.657h-252.686a8 8 0 0 0 0 16h256a8 8 0 0 0 5.657-2.343l21.657-21.657h108.686a8 8 0 0 0 0-16z" /></g></g></svg>
                            </div>
                        </button>
                    </div>
                    <div className="btn-container">
                        <button class="btn warning">
                            View BRS Report
                            <div className="btn-icon">
                                <svg height="100" viewBox="0 0 480 480" width="100" xmlns="http://www.w3.org/2000/svg"><path d="m344 104v336h-304c-13.847656.003906-26.121094-8.910156-30.398438-22.078125-1.0625-3.203125-1.605468-6.550781-1.601562-9.921875v-368c0-17.671875 14.328125-32 32-32h208v80c.027344 8.824219 7.175781 15.972656 16 16zm0 0" fill="#e6e7e8" /><path d="m264 104h80l-96-96v80c0 8.835938 7.164062 16 16 16zm0 0" fill="#acabb1" /><path d="m248 152h192c17.671875 0 32 14.328125 32 32v256c0 17.671875-14.328125 32-32 32h-192c-17.671875 0-32-14.328125-32-32v-256c0-17.671875 14.328125-32 32-32zm0 0" fill="#ffb655" /><g fill="#ffd5ca"><path d="m296 336c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0" /><path d="m368 336c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0" /><path d="m296 416c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0" /><path d="m368 416c0 13.253906-10.746094 24-24 24s-24-10.746094-24-24 10.746094-24 24-24 24 10.746094 24 24zm0 0" /><path d="m416 312c-13.253906 0-24 10.746094-24 24v80c0 13.253906 10.746094 24 24 24s24-10.746094 24-24v-80c0-13.253906-10.746094-24-24-24zm0 0" /></g><path d="m440 216v32c0 17.671875-14.328125 32-32 32h-128c-17.671875 0-32-14.328125-32-32v-32c0-17.671875 14.328125-32 32-32h128c17.671875 0 32 14.328125 32 32zm0 0" fill="#e6e7e8" /><path d="m440 216v32c0 17.671875-14.328125 32-32 32h-113.039062c45.808593-24.140625 86.933593-56.273438 121.4375-94.878906 13.933593 3.789062 23.601562 16.441406 23.601562 30.878906zm0 0" fill="#d8d7da" /><path d="m440 144h-88v-40c0-.175781-.089844-.328125-.105469-.503906-.039062-.699219-.175781-1.394532-.40625-2.054688-.089843-.257812-.152343-.503906-.265625-.753906-.386718-.871094-.929687-1.664062-1.597656-2.34375l-96-96c-.683594-.671875-1.480469-1.210938-2.351562-1.601562-.242188-.101563-.472657-.167969-.722657-.253907-.679687-.234375-1.390625-.375-2.109375-.4179685-.128906.0195313-.273437-.0703125-.441406-.0703125h-208c-22.082031.0273438-39.9726562 17.917969-40 40v368c.0273438 22.082031 17.917969 39.972656 40 40h168.800781c3.828125 18.613281 20.199219 31.976562 39.199219 32h192c22.082031-.027344 39.972656-17.917969 40-40v-256c-.027344-22.082031-17.917969-39.972656-40-40zm-115.3125-48h-60.6875c-4.417969 0-8-3.582031-8-8v-60.6875zm-308.6875 312v-368c0-13.253906 10.746094-24 24-24h200v72c0 13.253906 10.746094 24 24 24h72v32h-88c-22.082031.027344-39.972656 17.917969-40 40v248h-168c-13.253906 0-24-10.746094-24-24zm448 32c0 13.253906-10.746094 24-24 24h-192c-13.253906 0-24-10.746094-24-24v-256c0-13.253906 10.746094-24 24-24h192c13.253906 0 24 10.746094 24 24zm0 0" /><path d="m408 176h-128c-22.082031.027344-39.972656 17.917969-40 40v32c.027344 22.082031 17.917969 39.972656 40 40h128c22.082031-.027344 39.972656-17.917969 40-40v-32c-.027344-22.082031-17.917969-39.972656-40-40zm24 72c0 13.253906-10.746094 24-24 24h-128c-13.253906 0-24-10.746094-24-24v-32c0-13.253906 10.746094-24 24-24h128c13.253906 0 24 10.746094 24 24zm0 0" /><path d="m272 304c-17.671875 0-32 14.328125-32 32s14.328125 32 32 32 32-14.328125 32-32-14.328125-32-32-32zm0 48c-8.835938 0-16-7.164062-16-16s7.164062-16 16-16 16 7.164062 16 16-7.164062 16-16 16zm0 0" /><path d="m344 304c-17.671875 0-32 14.328125-32 32s14.328125 32 32 32 32-14.328125 32-32-14.328125-32-32-32zm0 48c-8.835938 0-16-7.164062-16-16s7.164062-16 16-16 16 7.164062 16 16-7.164062 16-16 16zm0 0" /><path d="m272 384c-17.671875 0-32 14.328125-32 32s14.328125 32 32 32 32-14.328125 32-32-14.328125-32-32-32zm0 48c-8.835938 0-16-7.164062-16-16s7.164062-16 16-16 16 7.164062 16 16-7.164062 16-16 16zm0 0" /><path d="m344 384c-17.671875 0-32 14.328125-32 32s14.328125 32 32 32 32-14.328125 32-32-14.328125-32-32-32zm0 48c-8.835938 0-16-7.164062-16-16s7.164062-16 16-16 16 7.164062 16 16-7.164062 16-16 16zm0 0" /><path d="m416 304c-17.671875 0-32 14.328125-32 32v80c0 17.671875 14.328125 32 32 32s32-14.328125 32-32v-80c0-17.671875-14.328125-32-32-32zm16 112c0 8.835938-7.164062 16-16 16s-16-7.164062-16-16v-80c0-8.835938 7.164062-16 16-16s16 7.164062 16 16zm0 0" /><path d="m56 64h48c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-48c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0" /><path d="m56 96h96c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8h-96c-4.417969 0-8 3.582031-8 8s3.582031 8 8 8zm0 0" /><path d="m197.65625 170.34375c-3.125-3.121094-8.1875-3.121094-11.3125 0l-29.65625 29.65625h-44.6875c-2.121094 0-4.15625.84375-5.65625 2.34375l-32 32c-2.078125 2.007812-2.914062 4.984375-2.179688 7.78125.730469 2.796875 2.914063 4.980469 5.710938 5.710938 2.796875.734374 5.773438-.101563 7.78125-2.179688l29.65625-29.65625h44.6875c2.121094 0 4.15625-.84375 5.65625-2.34375l32-32c3.121094-3.125 3.121094-8.1875 0-11.3125zm0 0" /><path d="m184 264h-120v-120c0-4.417969-3.582031-8-8-8s-8 3.582031-8 8v128c0 4.417969 3.582031 8 8 8h128c4.417969 0 8-3.582031 8-8s-3.582031-8-8-8zm0 0" /></svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
