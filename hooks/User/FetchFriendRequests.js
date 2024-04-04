const FetchFriendRequest = async (user, token) => {
  try {
    const response = await fetch(
      process.env.EXPO_PUBLIC_BASE_URL + `/user/${user._id}/friendrequest`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log({ Error: "Fail fetching friend requests", msg: error.message });
  }
};
