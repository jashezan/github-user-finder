export const userNotFound = {
  title: "User not found",
  description: "Please enter a valid username",
  status: "error",
  duration: 5000,
  isClosable: true,
};

export const emptyQuery = {
  title: "No query",
  description: "Please enter a valid query",
  status: "error",
  duration: 5000,
  isClosable: true,
};

export const fetchError = (er) => ({
  title: "Error",
  description: er,
  status: "error",
  duration: 5000,
  isClosable: true,
});

export const reposError = (er) => ({
  title: "Error",
  description: er,
  status: "error",
  duration: 5000,
  isClosable: true,
});

export const userDeleted = {
  title: "User deleted",
  description: "User deleted successfully",
  status: "success",
  duration: 5000,
  isClosable: true,
};
