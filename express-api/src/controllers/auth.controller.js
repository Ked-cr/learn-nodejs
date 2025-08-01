// src/controllers/auth.controller.js
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Validasi input sederhana
  if (!email || !password) {
    return res.sendError(
      "Email dan password wajib diisi",
      "VALIDATION_ERROR",
      400
    );
  }

  // Contoh login sederhana
  if (email === "eko@example.com" && password === "123456") {
    return res.sendResponse({ token: "fake-jwt-token" }, "Login berhasil");
  }

  return res.sendError("Email atau password salah", "INVALID_CREDENTIALS", 401);
};

export const register = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.sendError("Nama dan email wajib diisi", "VALIDATION_ERROR", 400);
  }

  // Misalnya nanti ada pengecekan ke database
  const newUser = {
    id: 3,
    name,
    email,
  };

  return res.sendResponse(newUser, "Registrasi berhasil");
};
