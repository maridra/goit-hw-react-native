const defaultInputStyles = {
  borderWidth: 1,
  borderRadius: 8,
  height: 50,
  padding: 16,
  fontFamily: "Roboto-Regular",
  fontSize: 16,
  lineHeight: 19,
};

const commonStyles = {
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImage: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  authContainer: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  form: {
    alignSelf: "center",
  },
  authTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    alignSelf: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  inactiveField: {
    ...defaultInputStyles,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    color: "#BDBDBD",
  },
  activeField: {
    ...defaultInputStyles,
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
    color: "#212121",
  },
  showPass: {
    position: "absolute",
    right: 16,
    top: 32,
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  authNav: {
    alignSelf: "center",
  },
  navText: {
    color: "#1B4371",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
};

export default commonStyles;
