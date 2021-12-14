import { TYPES } from '../../types';

export const getTags = products => async dispatch => {
  const tags = [];
  const allTags = [];

  products.forEach(product => {
    allTags.push(...product.tags);
  });

  let totalCount = 0;

  allTags.forEach(tag => {
    if (tags.filter(t => t.name === tag).length === 0) {
      const tagCount = allTags.filter(t => t === tag).length;
      totalCount += tagCount;
      tags.push({ name: tag, count: tagCount });
    }
  });

  if (tags.length > 0) {
    dispatch({
      payload: [{ name: 'All', count: totalCount }, ...tags],
      type: TYPES.GET_ALL_TAGS,
    });
  }
};
