import '../styles/ScrollDownIcon.css';

function ScrollDownIcon() {
  return (
    <svg className="scroll-down-icon" viewBox="0 0 30 58" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <polyline className="scroll-down-icon-path" stroke="#5E6572" stroke-width="5" points="2 1.85546875 15.0938462 12.8554688 28 1.85546875"></polyline>
            <polyline className="scroll-down-icon-path" id="scrollPath2" stroke="#5E6572" stroke-width="5" points="2 14.8554688 15.0938462 25.8554688 28 14.8554688"></polyline>
            <text id="Scroll-Down" font-family="PingFangTC-Medium, PingFang TC" font-size="10" font-weight="400" fill="#5E6572">
                <tspan x="2" y="43">Scroll </tspan>
                <tspan x="2" y="57">Down</tspan>
            </text>
        </g>
    </svg>
  )
}

export default ScrollDownIcon;