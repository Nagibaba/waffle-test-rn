import pt from 'prop-types';

/*
 * It generates common spacing props for
 * common components like Col, Row, Font
 */
export const generateSpacing = ({
  mt,
  mr,
  mb,
  ml,
  mh,
  mv,

  pt,
  pr,
  pb,
  pl,
  ph,
  pv,
}) => {
  const spacing = {};
  const defaultSpacing = {
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
    marginHorizontal: mh,
    marginVertical: mv,

    paddingTop: pt,
    paddingRight: pr,
    paddingBottom: pb,
    paddingLeft: pl,
    paddingHorizontal: ph,
    paddingVertical: pv,
  };
  Object.entries(defaultSpacing).forEach(([k, v]) => {
    if (v !== 'undefined') spacing[k] = v;
  });
  return spacing;
};

export const spacingPropTypes = {
  mt: pt.number,
  mr: pt.number,
  mb: pt.number,
  ml: pt.number,
  mh: pt.number,
  mv: pt.number,

  pt: pt.number,
  pr: pt.number,
  pb: pt.number,
  pl: pt.number,
  ph: pt.number,
  pv: pt.number,
};
