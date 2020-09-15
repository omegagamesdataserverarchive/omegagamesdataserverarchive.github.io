(function($, window, document, _undefined) {	
	XenForo.xiTag = function($trigger) {

		$trigger.click(function(e) {
			var $form = $('#QuickReply')
				,	xhr = null;

			$form.data('QuickReply').scrollAndFocus();

			var ed = XenForo.getEditorInForm($form);

			if(!ed) {
				return false;
			}

			if(ed.$editor) {
				ed.insertHtml('@' + $trigger.data('username') + ', ');
				if (ed.$editor.data('xenForoElastic'))
				{
					ed.$editor.data('xenForoElastic')();
				}
			} else {
				ed.val(ed.val() + '@' + $trigger.data('username') + ', ');
			}

			return false;
		});
	}
		
	XenForo.register('a.XITag', "XenForo.xiTag");
})(jQuery, this, document);