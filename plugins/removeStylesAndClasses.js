'use strict';

exports.type = 'perItem';

exports.active = true;

exports.params = {

};

/**
 * Remove style elements and style / class attributes.
 *
 * @return {Boolean} if false, item will be filtered out
 *
 * @author Pawel Sledzikowski
 */
exports.fn = function (item, params) {

    if (item.isElem('style'))
        return false;

    if (item.hasAttr('class'))
        item.removeAttr('class');

    if (item.hasAttr('style'))
        item.removeAttr('style');

};
