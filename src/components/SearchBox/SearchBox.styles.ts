import { Colors } from "../../constants/Colors";

export const styles = {
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    paddingLeft: 32,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'relative',
  },
  closeSearchButton: {
    position: 'absolute',
    right: 0,
    height: 38,
    color: Colors.black,
    justifyContent: 'center',
    zIndex: 4,
  },
  scanQrImageContainer: {
    position: 'absolute',
    right: 0,
    height: 38,
    color: Colors.black,
    justifyContent: 'center',
    zIndex: 4,
    paddingRight: 12,
  },
  closeSearchButtonImage: {
    height: 18,
    width: 18,
  },
  scanQrImage: {
    height: 24,
    width: 24,
  },
  iconSearch: {
    position: 'absolute',
    alignSelf: 'center',
    paddingLeft: 12,
  },
};
