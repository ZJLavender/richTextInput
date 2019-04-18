import style from 'styled-components';
export const OutterContainer= style.div`
width:100%;padding:2vw;border-radius:1vw;
background:#f8f8f8;
position:fixed;
bottom:0;
`

export const InputOutter=style.div`
width:100%;display:flex;justify-content:space-between;align-items:stretch;
position:relative;
&>.inputDiv{
    resize:none;outline:none;
    border-radius:1vw;border:none;background:#fff;
    width:75vw;min-height:8vw;
    max-height:100vw;overflow-y:auto;
    padding:2vw;
    &>img{
        width:1em;height:1em;
        margin-left:0.2em;
    }
}
`
export const SendBtn = style.div`
    font-size:0.7em;padding:1vw;color:#fff;background-color:#339933;border-radius:1vw;
`

export const BtnContainer=style.div`
font-size:1.2em;width:18vw;
justify-content:space-between;
display:flex;
align-items:flex-end;
padding-bottom:1vw;
`

export const ScrollHeghtKeeper=style.pre`
width: 75vw; border-radius: 1vw; border: none; background: #eee; min-height: '8vw'; word-break: break-all; position: absolute; z-index: -1;opacity:0 
`

export const EmojiTab=style.div`
width:100%;display:flex;flex-wrap:wrap;justify-content:space-between;
transition:all 0.2s;
padding-top:2vw;
&>div{
    display:flex;jusitify-content:center;align-items:center;
    width:12.5%;height:12.5vw;
    padding:2.5vw;
    &>img{
        width:100%;height:100%;
    }
}
`