import {ReactNode} from 'react';
import {View} from '../View';
import {styles} from './LoadingSpinner.styles';
import './LoadingSpinner.styles.css';

import {ILoadingSpinnerProps} from './LoadingSpinner.types';
import Images from '../Image/Image.component';

const LoadingSpinner = ({
  loadingType = false,
  loadingIcon = '',
}: ILoadingSpinnerProps) => {
  const _renderSpinnerComponent = () => <div className="loading-spinner" />;

  const _renderSpinnerSection = () => (
    <View style={styles.loadingSpinnerSectionContainer}>
      <div className="loading-spinner-section" />
    </View>
  );

  const _renderSpinnerPage = () => (
    <View style={styles.loadingSpinnerPageContainer}>
      <View style={styles.loadingSpinnerPageContent}>
        <div className="loading-spinner-pages" />
        {loadingIcon ? (
          <img style={styles.loadingIcon} src={loadingIcon} alt={''} />
        ) : null}
      </View>
    </View>
  );

  return (
    <>
      {loadingType === 'page'
        ? _renderSpinnerPage()
        : loadingType === 'section'
        ? _renderSpinnerSection()
        : _renderSpinnerComponent()}
    </>
  );
};

export default LoadingSpinner;
