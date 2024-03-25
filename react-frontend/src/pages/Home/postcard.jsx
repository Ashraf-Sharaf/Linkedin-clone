const PostCard = ({ post }) => {
  
  const {name, bio, description } = post;

  return (
<div className="flex column post">
<div>
  <div>{name}</div>
  <div>{bio}</div>
</div>

<div>
{description}
</div>
</div>
  );
};

export default PostCard;

