import {} from 'ace-builds'
import {onMount} from 'solidjs'

export default function SolidAce(props) {
    let editorDiv
    onMount(()=>{
        console.log(editorDiv)
    })
    return <div ref={editorDiv}/>
}