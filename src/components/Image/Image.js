import React from 'react';
import classnames from 'classnames';
import { ReactSVG } from 'react-svg';
import { Editable } from '../Editable';
import { isBackgroundIcon } from './utils';

const Image = ({
  icon,
  iconId,
  alt,
  wrapperClassName,
  imageWrapperClassName,
  svgWrapperClassName,
  stringId,
  showUpload,
  beforeInjection = () => {},
}) => {
  const useSvg = icon.indexOf('.svg') > 0;
  const isBackground = isBackgroundIcon(iconId);

  if (isBackground) {
    return (
      <div
        className={classnames(
          wrapperClassName,
          'background-size-contain',
          'h-100'
        )}
        style={{ backgroundImage: `url(${icon})` }}
      />
    );
  }

  return (
    <Editable iconId={showUpload ? iconId : ''} stringId={stringId}>
      {icon && useSvg && (
        <ReactSVG
          src={icon}
          className={classnames(wrapperClassName, svgWrapperClassName)}
          beforeInjection={beforeInjection}
          fallback={() => (
            <img
              src={icon}
              alt={alt}
              className={classnames(wrapperClassName, svgWrapperClassName)}
            />
          )}
        />
      )}
      {icon && !useSvg && (
        <img
          src={icon}
          alt={alt}
          className={classnames(
            wrapperClassName,
            imageWrapperClassName,
            'object-fit-contain'
          )}
        />
      )}
    </Editable>
  );
};

Image.defaultProps = {
  icon: '',
  iconId: '',
  stringId: '',
  alt: '',
  wrapperClassName: '',
  imageWrapperClassName: '',
  svgWrapperClassName: '',
  showUpload: true,
};

export default Image;
