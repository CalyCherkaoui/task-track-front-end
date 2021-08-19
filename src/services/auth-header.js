const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const token = JSON.parse(localStorage.getItem('token'));

  if (user && token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

export default authHeader;
