import { createCustomElement } from '@servicenow/ui-core';
import snabbdom, { Fragment } from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import '@servicenow/now-pill';
import '@servicenow/now-heading';


const view = (state, { updateState }) => {
	return (
		<Fragment>
			<h1 className="cy-heading">React App</h1>
			<div className="red">This is my first ServiceNow UI-builder Component!</div>
			<now-pill icon="envelope-fill" can-dismiss></now-pill>
			<now-heading label="Header Primary" level="1" variant="header-primary" />
		</Fragment>
	);
};

createCustomElement('x-409431-hello-world', {
	renderer: { type: snabbdom },
	view,
	styles
});
