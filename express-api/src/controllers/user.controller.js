
// NOTE: Dummy data
const users = [
  { id: 1, name: "Eko Ramadani", email: "eko@example.com" },
  { id: 2, name: "Ked", email: "ked@example.com" },
];

// NOTE: handler GET usersList
export const getUsers = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  const currentPage = parseInt(page);
  const pageLimit = parseInt(limit);

  const start = (currentPage - 1) * pageLimit;
  const paginatedUsers = users.slice(start, start + pageLimit);

  return res.sendResponse(paginatedUsers, "Daftar user berhasil diambil", {
    page: currentPage,
    limit: pageLimit,
    total: users.length,
  });
};

// NOTE: Handle get User
export const getUserById = async (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));

  if (!user) {
    return res.sendError("User tidak ditemukan", "USER_NOT_FOUND", 404);
  }

  return res.sendResponse(user, "User berhasil ditemukan");
};
