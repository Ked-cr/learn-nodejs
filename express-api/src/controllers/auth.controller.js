// NOTE:handler login
export const login = async (req, res) => {
  const { email, password } = req.body;

  // NOTE: validasi Input
  if (!email || !password) {
    return res.sendError(
      "Email dan password wajib diisi",
      "VALIDATION_ERROR",
      400
    );
  }

  // NOTE: Contoh login sederhana
  if (email === "eko@example.com" && password === "123456") {
    return res.sendResponse({ token: "fake-jwt-token" }, "Login berhasil");
  }

  return res.sendError("Email atau password salah", "INVALID_CREDENTIALS", 401);
};

// NOTE: handler Register
export const register = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.sendError("Nama dan email wajib diisi", "VALIDATION_ERROR", 400);
  }

  // NOTE: Dummy Misalnya nanti ada pengecekan ke database
  const newUser = {
    id: 3,
    name,
    email,
  };

  return res.sendResponse(newUser, "Registrasi berhasil");
};
