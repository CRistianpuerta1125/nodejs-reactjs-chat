import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps = useMultiChatLogic(
        '2f11a457-ab3a-4a41-b998-61b3d57b2114',
        props.user.username,
        props.user.secret
    );
    return (
    <div style={{height: '100vh', overflowY: 'hidden' }}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100%'}} />
    </div>
    )
}
export default ChatsPage