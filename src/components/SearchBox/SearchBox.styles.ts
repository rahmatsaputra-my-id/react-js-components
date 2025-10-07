import { Colors } from "../../constants/Colors";

export const styles = {
  textInputContainer: {
    width: '100%',
  },
  textInput: {
    paddingRight: 40,
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
    paddingRight: 16,
  },
  closeSearchButtonImage: {
    height: 18,
    width: 18,
  },
  iconSearch: {
    position: 'absolute',
    alignSelf: 'center',
    paddingLeft: 12,
  },
};
