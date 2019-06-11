import React from 'react';
import Chip from '@material-ui/core/Chip';
import { translate } from 'react-admin';

const styles = {
    main: { display: 'flex', flexWrap: 'wrap' },
    chip: { margin: 4 },
};

const ActionsField = ({ record, translate }) => (
    <span style={styles.main}>
        {record.actions &&
            record.actions.map(action => (
                <Chip
                    key={action}
                    style={styles.chip}
                    label={action.name}
                />
            ))}
    </span>
);

const TranslatedActionsField = translate(ActionsField);

TranslatedActionsField.defaultProps = {
    addLabel: true,
    source: 'groups',
};

export default TranslatedActionsField;
