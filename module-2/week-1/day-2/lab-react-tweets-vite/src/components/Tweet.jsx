import Actions from "./Actions";
import { Message } from "./Message";
import { ProfileImage } from "./ProfileImage";
import { TimeStamp } from "./TimeStamp";
import { User } from "./User";

function Tweet({ oneTweet }) {
  const { user, timestamp, message } = oneTweet;
  return (
    <div className="tweet">
      <ProfileImage theImage={user.image} />

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
          <TimeStamp timestamp={timestamp} />
        </div>
        <Message theMessage={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
