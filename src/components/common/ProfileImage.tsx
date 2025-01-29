interface ProfileImageProps {
  className?: string;
}

export const ProfileImage = ({ className = "" }: ProfileImageProps) => {
  return (
    <img 
      src="/profile.jpg" 
      alt="Profile"
      className={`object-cover ${className}`}
    />
  );
};
