$.getScript("https://cdn.ckeditor.com/4.8.0/full/ckeditor.js",
    function (data, textStatus, jqxhr) {        
});

$.getScript("https://static.horbito.com/app/522/md5/md5.min.js",
        function (data, textStatus, jqxhr) {
        });

$.getScript("https://static.horbito.com/app/522/iframeResizer.min.js",
        function (data, textStatus, jqxhr) {
        });

$.getScript("https://static.horbito.com/app/522/jquery.tagsinput.js",
        function (data, textStatus, jqxhr) {
        });

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.js",
        function (data, textStatus, jqxhr) {
            $(".hrgmail_scroll").mCustomScrollbar({
                scrollButtons: {enable: false},
                theme: "dark-thick",
                scrollbarPosition: "inside"
            });

            $(".hrgmail_scroll_content").mCustomScrollbar({
                scrollButtons: {enable: false},
                theme: "dark-thick",
                scrollbarPosition: "inside",
                callbacks: {
                    whileScrolling: function () {
                        //console.log("Content scrolled..."+ this.mcs.topPct);
                    }
                }
            });

        });


var gmail_accounts = [];
var gmail_pagination = [];
var dynamic_var = {};
var gmail_current_account;
var maxResults = 20;
var nextPageToken = '';
var gmail_win = $(this);
var gmail_signature = "";
var three_dots_html = "<div class=\"hrgmail_threedot\">...</div>";
var message_iframe_bottom_padding = 15;
var login_error = 1;
var win = $(this);


// set multi language
$('.app-title').text(lang.gmailTitle);
$('.ui-header-search figure input').attr('placeholder', lang.gmailSearch);
$('.hrgmail_allCheck_all').text(lang.gmailAll);
$('.hrgmail_allCheck_none').text(lang.gmailNone);
$('.hrgmail_allCheck_read').text(lang.gmailRead);
$('.hrgmail_allCheck_unread').text(lang.gmailUnread);
$('.hrgmail_allCheck_starred').text(lang.gmailStarred);
$('.hrgmail_allCheck_unstarred').text(lang.gmailUnstarred);
$('.hrgmail_discard_drafts div span').text(lang.gmailDiscardDrafts);
$('.hrgmail_move_to_inbox div span').text(lang.gmailMoveToInbox);
$('.hrgmail_delete_forever div span').text(lang.gmailDeleteForever);
$('.hrgmail_not_spam div span').text(lang.gmailNotSpam);
$('.back_messages').attr('title', lang.gmailBackToInbox);
$('.hrgmail_archive').attr('title', lang.gmailArchive);
$('.hrgmail_report_spam').attr('title', lang.gmailReportSpam);
$('.hrgmail_trash_report_spam').attr('title', lang.gmailReportSpam);
$('.hrgmail_delete_title').attr('title', lang.gmailDelete);
$('.hrgmail_moveto_title').attr('title', lang.gmailMoveTo);
$('.hrgmail_moveto_title .hrgmail_move_to label').text(lang.gmailMoveTo + ':');
$('.hrgmail_move_to_social').text(lang.gmailSocial);
$('.hrgmail_move_to_social').attr('title', lang.gmailSocial);
$('.hrgmail_move_to_promotions').text(lang.gmailPromotions);
$('.hrgmail_move_to_promotions').attr('title', lang.gmailPromotions);
$('.hrgmail_move_to_updates').text(lang.gmailUpdates);
$('.hrgmail_move_to_updates').attr('title', lang.gmailUpdates);
$('.hrgmail_move_to_forums').text(lang.gmailForums);
$('.hrgmail_move_to_forums').attr('title', lang.gmailForums);
$('.hrgmail_labelas_title').attr('title', lang.gmailLabels);
$('.hrgmail_labelas_title .hrgmail_move_to label').text(lang.gmailLabelsAs + ':');
$("#hrgmail_labelas .lastParmotons ul li span").text(lang.gmailApply);
$(".hrgmail_allRead_more .hrgmail_allRead_more_select span").text(lang.gmailMore);
$(".hrgmail_mark_all_as_read_title").text(lang.gmailMarkAllRead);
$(".hrgmail_selectMessages i").text(lang.gmailSelectMsgToSeeAtion);
$(".hrgmail_main_pagination span").text(lang.gmailOf);
$('.hrgmail_showMails_prev').attr('title', lang.gmailNewer);
$('.hrgmail_showMails_next').attr('title', lang.gmailOlder);
$(".accountNotRegister h1").text(lang.gmailTitle);
$(".accountNotRegister p").html(lang.gmailAccessDirectlyFromHorbitoMsg);
$(".accountNotRegister span").text(lang.gmailLogin);
$("#compose-button").text(lang.gmailCompose);
$(".INBOX span").text(lang.gmailInbox);
$(".STARRED span").text(lang.gmailStarred);
$(".SENT span").text(lang.gmailSentMail);
$(".DRAFT span").text(lang.gmailDrafts);
$(".IMPORTANT span").text(lang.gmailImportant);
$(".ALL span").text(lang.gmailAllMail);
$(".SPAM span").text(lang.gmailSpam);
$(".TRASH span").text(lang.gmailTrash);
$(".CATEGORY_SOCIAL span").text(lang.gmailSocial);
$(".CATEGORY_PROMOTIONS span").text(lang.gmailPromotions);
$(".CATEGORY_UPDATES span").text(lang.gmailUpdates);
$(".CATEGORY_FORUMS span").text(lang.gmailForums);
$(".hrgmail_lftBr_addAccountsTtile span").text(lang.gmailAccounts);
$("#hrgmail_click_here_reply").text(lang.gmailReply);
$(".hrgmail_click_here span").text(lang.gmailOr);
$(".hrgmail_click_here .click_here_text").text(lang.gmailReplyOrForward);
$("#hrgmail_click_here_forward").text(lang.gmailForward);
$("#hrgmail_cc_outer_main_reply label").text(lang.gmailTo);
$("#hrgmail_cc_html_main_reply label, #hrgmail_cc_main_reply").text(lang.gmailCc);
$("#hrgmail_bcc_html_main_reply label, #hrgmail_bcc_main_reply").text(lang.gmailBcc);
$("#hrgmail_cc_main_reply").attr('title', lang.gmailCcRecipients);
$("#hrgmail_bcc_main_reply").attr('title', lang.gmailBccRecipients);
$("#hrgmail_recipients_main_reply span").text(lang.gmailRecipients);
$("#hrgmail_subject_main_reply").attr('placeholder', lang.gmailSubject);
$("#delete_draft_main_reply").attr('title', lang.gmailDiscardDraft);
$("#send_draft_main_reply").text(lang.gmailSend);
$(".hrgmail_select_title").attr('title', lang.gmailSelect);
$(".hrgmail_refresh_title").attr('title', lang.gmailRefresh);

// jquery.chatbox.js
(function ($)
{
    $.fn.chatbox = function (options) {

        var defaults = {
            id: null,
            offset: 12,
            width: 240,
            title: lang.gmailNewmsg,
            messageSent: function (id, sender, message) {
                // Over ride this callback
            },
            boxClosed: function (boxId) {
                // Over ride this callback
            }
        }, _options;


        var ChatBox = function (el, options) {

            var tpl =
                    '<div class="hrgmail_newMessage_popup chatbox wz-drop-area">\
                <div class="hrgmail_newMessage_title clearfix header">\
                    <p>' + lang.gmailNewmsg + '</p>\
                    <div class="hrgmail_newMsg_miniMax_btns">\
                       <ul>\
                         <li><span title="' + lang.gmailMinimize + '" class="hrgmail_newMsgButton_minimum minclose minimize_chatbox"  id="hrgmail_minmizeMail" ><i></i></span></li>\
                         <li><span title="' + lang.gmailMaximize + '" class="hrgmail_newMsgButton_minimum maximize_chatbox display_none"  id="hrgmail_minmizeMail"><i style="margin-top: -7px;"></i></span></li>\
                         <li><span class="hrgmail_newMsgButton_maximum fullmaximize_chatbox"><i></i></span></li>\
                         <li><span title="' + lang.gmailSaveClose + '" class="hrgmail_newMsgButton_clos gmail_close close_chatbox" id="hrgmail_hideMail"><i></i></span></li>\
                        </ul>\
                    </div>\
                </div>\
                <div class="hrgmail_newMessage_content">\
                    <div class="hrgmail_newMessage_fields">\
                        <div class="hrgmail_subject_to_field">\
                            <div class="hrgmail_recieptfield" id="hrgmail_cc_outer_' + el.id + '">\
                                <label>' + lang.gmailTo + '</label><input type="text" id="tokenize-to-' + el.id + '" class="hrgmail_to_filed tags compose-to" />\
                                <div id="hrgmail_cc_html_' + el.id + '"><label>' + lang.gmailCc + '</label><input type="text" id="tokenize-cc-' + el.id + '" class="tags" /></div>\
                                <div id="hrgmail_bcc_html_' + el.id + '"><label>' + lang.gmailBcc + '</label><input type="text" id="tokenize-bcc-' + el.id + '" class="tags" /></div>\
                                <div class="hrgmail_cc_bcc">\
                                    <span id="hrgmail_cc_' + el.id + '" title="' + lang.gmailCcRecipients + '">Cc</span>\
                                    <span id="hrgmail_bcc_' + el.id + '" title="' + lang.gmailBccRecipients + '">Bcc</span>\
                                </div>\
                            </div>\
                            <div class="hrgmail_recipients" id="hrgmail_recipients_' + el.id + '">\
                                <span>' + lang.gmailRecipients + '</span>\
                            </div>\
                        </div>\
                        <div class="hrgmail_subject_to_field">\
                            <div class="hrgmail_recieptfield">\
                                <input type="text" id="hrgmail_subject_' + el.id + '" placeholder="' + lang.gmailSubject + '" class="hrgmail_subject_filed" /> \
                            </div>\
                        </div>\
                    </div>\
                    <div class="hrgmail_enteremail_area" id="hrgmail_enteremail_area_' + el.id + '">\
                        <textarea class="compose-message" id="hrgmail_message_' + el.id + '"></textarea>\
                        <div class="hrgmail_fileName hrgmail_fileName_' + el.id + '"><ul></ul></div>\
                    </div>\
                    <span class="hrgmail_drag_drop display_none">Drop files here</span>\
                    <div class="hrgmail_attachment_section clearfix">\
                        <div class="hrgmail_attachment_section_inner">\
                            <div class="hrgmail_attach_icon">\
                                <span class="hrgmail_attach_btn hrgmail_attach_btn_' + el.id + '">&nbsp;</span>\
                            </div>\
                            <div class="hrgmail_enviar_bttn">\
                                <span class="saving_text" id="saving_text_' + el.id + '"></span>\
                                <span class="delete_draft" id="delete_draft_' + el.id + '" title="' + lang.gmailDiscardDraft + '"></span>\
                                <span class="send_draft" id="send_draft_' + el.id + '">' + lang.gmailSend + '</span>\
                            </div>\
                        </div>\
                     </div>\
                    </div>\
               </div>';





            var self = this;
            this.el = el;
            this.$el = $(el);
            this.elHeights = {chat_area: '355px', chat_info: '20px', chat_message: '55px'};
            this.options = options;

            this.init = function () {
                this.$el.html(tpl);
                this.setTitle();
                this.attachEvents();
                this.positionBox();
            };

            this.attachEvents = function () {
                this.$el.find('.minimize_chatbox').on('click', function (e) {
                    e.stopPropagation();
                    self.minimize();
                });

                this.$el.find('.maximize_chatbox').on('click', function (e) {
                    e.stopPropagation();
                    self.maximize();
                });

                this.$el.find('.fullmaximize_chatbox').on('click', function (e) {
                    e.stopPropagation();
                    return false;
                });

                this.$el.find('.hrgmail_newMessage_title').on('click', function (e) {
                    e.stopPropagation();
                    self.minimize_maximize();
                });


                this.$el.find('.close_chatbox').on('click', function (e) {
                    e.stopPropagation();
                    self.closeBox();
                });

                this.$el.find('textarea').on('keyup', function (e) {
                    if (e.keyCode == 13) {
                        self.options.messageSent(options.id, 'test', $(this).val());
                        $(this).val('');
                    }
                });
            };

            this.positionBox = function (offset) {
                
                var _offset = typeof (offset) === 'undefined' ? (options.offset==0?12:options.offset) : offset;
                
                self.$el.find('.chatbox').css({'right': _offset});
            };

            this.closeBox = function () {
                self.$el.hide();
                self.options.boxClosed(options.id);
            };

            this.init();
        };


        ChatBox.prototype.setTitle = function () {
            this.$el.find('.header p').html(options.title);
        };

        ChatBox.prototype.minimize = function () {
            this.$el.find('.chat_area, .chat_info, .chat_message').css({'height': 0});
            this.$el.find('.minimize_chatbox').addClass("display_none");
            this.$el.find('.maximize_chatbox').removeClass("display_none");
            this.$el.find('.chatbox').css({height: '36px'});
            //this.$el.find('.chatbox').css({width: '200px'});
        }

        ChatBox.prototype.maximize = function () {
            this.$el.find('.chat_area').css({height: this.elHeights['chat_area']});
            this.$el.find('.chat_info').css({height: this.elHeights['chat_info']});
            this.$el.find('.chat_message').css({height: this.elHeights['chat_message']});
            this.$el.find('.minimize_chatbox').removeClass("display_none");
            this.$el.find('.maximize_chatbox').addClass("display_none");
            this.$el.find('.chatbox').css({height: 'auto'});
            //this.$el.find('.chatbox').css({width: '450px'});
        }

        ChatBox.prototype.minimize_maximize = function () {
            if (this.$el.find('.minimize_chatbox').hasClass("display_none")) {
                this.$el.find('.maximize_chatbox').click();
            } else {
                this.$el.find('.minimize_chatbox').click();
            }

        }

        ChatBox.prototype.addMessage = function (from, message) {
            this.$el.find('.chat_area').append('<p><b>' + from + ':&nbsp;</b>' + message + '</p>');
        }

        ChatBox.prototype.showBox = function () {
            this.$el.show();
        }

        var methods = {
            init: function (options) {
                return this.each(function () {
                    var $this = $(this);
                    $this.data('chatbox', new ChatBox(this, options));
                });
            },
            minimize: function () {
                var $this = $(this),
                        chatbox = $this.data('chatbox');
                chatbox.minimize();
            },
            maximize: function () {
                var $this = $(this),
                        chatbox = $this.data('chatbox');
                chatbox.maximize();
            },
            minimize_maximize: function () {
                var $this = $(this),
                        chatbox = $this.data('chatbox');
                chatbox.minimize_maximize();
            },
            addMessage: function (from, msg) {
                var $this = $(this),
                        chatbox = $this.data('chatbox');
                chatbox.addMessage(from, msg);
            },
            closeBox: function () {
                var $this = $(this),
                        chatbox = $this.data('chatbox');
                chatbox.closeBox();
            },
            showBox: function () {
                var $this = $(this),
                        chatbox = $this.data('chatbox');
                chatbox.showBox();
            },
            offset: function (value) {
                var $this = $(this),
                        chatbox = $this.data('chatbox');
                chatbox.positionBox(value);
            }
        };

        if (methods[options]) {
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) {
            _options = $.extend({}, defaults, options);
            return methods.init.apply(this, [_options]);
        } else {
            $.error('Method ' + options + ' does not exist on jQuery.chatbox');
        }
    };
})(jQuery);

// end jquery.chatbox.js
// chatbox_manager.js

var ChatboxManager = function (options)
{
    var visibleBoxes = new Array(),
            gap = 17, width = 450,
            hiddenBoxs = new Array();


    var addBox = function (id, title, messageSentCallbak) {
        var idx1 = visibleBoxes.indexOf(id),
                idx2 = hiddenBoxs.indexOf(id);

        if (idx1 > -1) {
            // Already visible Do nothing
        } else if (idx2 > -1) {
            hiddenBoxs.splice(id, 1);
            visibleBoxes.push(id);
            recalculateOffsets();
        } else {

            var el = $('<div class="chatbox-html" id="' + id + '"></div>');
            el.appendTo("#chatbox-html");
            el.chatbox({
                id: id,
                title: title,
                offset: visibleBoxes.length * (width + gap),
                boxClosed: closeBoxCallback,
                messageSent: messageSentCallbak
            });
            visibleBoxes.push(id);


        }
    },
            closeBoxCallback = function (boxId) {
                var idx = visibleBoxes.indexOf(boxId);
                hiddenBoxs.push(boxId);
                visibleBoxes.splice(idx, 1);
                recalculateOffsets();
            },
            recalculateOffsets = function () {
                var initialOffset = 12;
                for (var i = 0; i < visibleBoxes.length; i++) {
                    $('#' + visibleBoxes[i]).chatbox('showBox');
                    $('#' + visibleBoxes[i]).chatbox('offset', initialOffset);
                    //console.log(initialOffset);
                    initialOffset += (width + gap);
                }
            };

    return {
        addBox: addBox
    };
};

// end chatbox_manager.js

// changes event
api.integration.gmail.on('changes', function (data)
{
    console.log('change event');
    var labelid = $("#labelid").val();

//        if(labelid == "CATEGORY_PERSONAL")
//                labelid = "INBOX"; 

    if (data.id == gmail_current_account.id) {

        $.each(data.changes, function () {
            //add new labels
            
            if (this.labelsAdded || this.labelsRemoved || this.messagedAdded || this.messagesDeleted)
            {
                if (this.labelsAdded.length > 0) {
                    if (jQuery.inArray(labelid, this.labelsAdded[0]) != -1) {
                        gmail_changes_reload();                          
                        return false;
                    }
                } else if (this.messagedAdded.length > 0) {
                    if (jQuery.inArray("INBOX", this.messagedAdded[0]) != -1) {
                        gmail_changes_reload(); 
                        //gmail_show_message(lang.gmailMsgReceive, lang.gmailMsgReceiveNewMsg);     // disabled because banner is managed to display on service.js
                        return false;
                    }
                } else if (this.messagesDeleted.length > 0) {
                    if (jQuery.inArray(labelid, this.messagesDeleted[0]) != -1) {
                        gmail_changes_reload(); 
                        return false;
                    }
                }
                if (this.labelsRemoved.length > 0) {
                    if (jQuery.inArray(labelid, this.labelsRemoved[0]) != -1) {
                        gmail_changes_reload(); 
                        return false;
                    }
                }
            }                        
        });

    }
    
    totalCounts();        
    

});

$(document).ready(function ()
{

    $(".hrgmail_lftBr_inbxMenue").css({'height': 'calc(100% - 200px)'});
    gmail_preload();

    var getwidth = $(".ho_gmail_error_success").width();
    var getmargin = parseInt(getwidth / 2);
    $(".ho_gmail_error_success").css("width", getwidth);
    $(".ho_gmail_error_success").css("margin-left", "-" + getmargin + "px");

    //Chatbox
    var counter = 1,
            offset = 0;
    chatbox_manager = new ChatboxManager();
    $('#compose-button').on('click', function (e) {
        var id = 'gmail_compose_box_' + counter.toString();
        var title = lang.gmailNewmsg;
        chatbox_manager.addBox(id, title, messageSentCallbak);

        function messageSentCallbak(id, user, msg) {
            //code here
        }

        append_chatbox_methods(id);

        counter++;
    });

    show_accounts();

    setup_drag_drop();

});


function setup_drag_drop()
{
    //console.log('setup_drag_drop',$('.wz-drop-area'))
    var domItem = $('.wz-drop-area');

    win.on( 'wz-dropenter', '.wz-drop-area', function( e, item ){
      console.log("change ui");
      $(this).find(".hrgmail_drag_drop").removeClass("display_none");
    });

    win.on( 'wz-dropleave', '.wz-drop-area', function( e, item ){
      // Use this event to remove the highlight the UI
      console.log("remove change ui");
      $(this).find(".hrgmail_drag_drop").addClass("display_none");
    });



    domItem.mousemove(function( event ) {
      var msg = "Handler for .mousemove() called at ";
      msg += event.pageX + ", " + event.pageY;
      //console.log(msg);
    });

}

// show messages against category labels
gmail_win.on('click', '.hrgmail_lftBr_inbxMenue ul li span', function (e)
{
    e.stopPropagation();
    $(".hrgmail_main_pagination").html("<strong>0-0</strong> " + lang.gmailOf + " <strong>0</strong>");
    $('#oldLabelId').val($('#labelid').val());
    gmail_preload();
    var select = $(this).data("id");
    var labelIds = select;
    gmail_show_messages(labelIds, select);
});

// Show message details
gmail_win.on('click', '.hrgmail_mailsContent ul li div.hrgmail_mailList', function (e)
{
    e.stopPropagation();
    $('#tokenize-to-main_reply').importTags('');
    $("#hrgmail_labelas").hide();
    $("#hrgmail_moveto").hide();
    $(".hrgmail_click_here").show();
    $(".hrgmail_main_reply").hide();
    $(".hrgmail_attachmail").html();

    var threadId = $(this).parents('li').data("threadid");
    var draftExist = $(this).parents('li').data("draft");
    var labelid = $("#labelid").val();
    var threadsGetParams = {};
    var messages_ids_array = [];

    $("#openThreadId").val(threadId);

    if (draftExist == 1 && labelid == "DRAFT") {
        create_draft_compose_box(threadId);
        return;
    }

    showError(lang.gmailLoading + ' ...', 1);

    gmail_current_account.usersThreadsGet(threadId, threadsGetParams, function (error, thread_messages)
    {
        if (error)
            gmailErrorHandling(error);

        var total_messages = 0;
        
        $.each(thread_messages["messages"], function () {
            if (jQuery.inArray("TRASH", this.labelIds) == -1)
                total_messages++;
        });
        
        $(".hrgmailmailerInfoInner ul").html('');
        $(".hrgmail_dynamic_thread_messages").html('');
        $("#detailPage").val(1);
        gmail_messages_details_labels_show();

        //content
        $(".hrgmail_mailsContent").hide();
        $(".hrgmail_mailsContentDetails").show();

        $(".hrgmail_readmailTitle_text h3").text(getHeader(thread_messages["messages"][0].payload.headers, 'Subject'));

        //sent
        if (jQuery.inArray("SENT", thread_messages["messages"][0].labelIds) != -1) {
            $("#hrgmail_to_email_main_reply").val(getHeader(thread_messages["messages"][0].payload.headers, 'To'));
        } else {
            $("#hrgmail_to_email_main_reply").val(getHeader(thread_messages["messages"][0].payload.headers, 'From'));
        }
        $("#hrgmail_subject_main_reply").val(getHeader(thread_messages["messages"][0].payload.headers, 'Subject'));

        //important
        if (jQuery.inArray("IMPORTANT", thread_messages["messages"][0].labelIds) != -1)
            $(".hrgmailimoprtantInner label").addClass("select");
        else
            $(".hrgmailimoprtantInner label").removeClass("select");

        //inbox
        if (jQuery.inArray("INBOX", thread_messages["messages"][0].labelIds) != -1)
            $(".hrgmailInbox").show();
        else
            $(".hrgmailInbox").hide();

        var count = 1;
        //console.log('thread messages : ' + JSON.stringify(thread_messages["messages"]));
        thread_messages["messages"].forEach(function (message) {
            
         if (jQuery.inArray("TRASH", message.labelIds) == -1){   
            removeLabels([message.id], ["UNREAD"]);
            console.log('thread message: ' , message );

            messages_ids_array.push(message.id);
            var append_reply_text = 'On ' + gmail_full_date_formate(getHeader(message.payload.headers, 'Date')) + ', ' + htmlEntities(getHeader(message.payload.headers, 'From')) + ' wrote:';
            var append_forward_text = "---------- Forwarded message ---------- <br/> From: " + htmlEntities(getHeader(message.payload.headers, 'From')) + " <br/>Date: " + gmail_full_date_formate(getHeader(message.payload.headers, "Date")) + " <br/>Subject: " + getHeader(message.payload.headers, 'Subject') + " <br/>To: " + htmlEntities(getHeader(message.payload.headers, 'To'));
            $("#hrgmail_message_id_main_reply").val(getHeader(message.payload.headers, 'Message-ID'));
            $("#hrgmail_append_reply_text_main_reply").val(append_reply_text);
            $("#hrgmail_append_forward_text_main_reply").val(append_forward_text);

            var sent = 0;
            if (getHeader(message.payload.headers, 'Reply-To') != "") {
                var getImageEmail = getHeader(message.payload.headers, 'Reply-To');
            } else {
                var getImageEmailText = getHeader(message.payload.headers, 'Return-Path');
                var getImageEmail = getImageEmailText.replace('<', '').replace('>', '');
            }
            
            var to_me_text = 'me';
            var reply_to_all_emails = getHeader(message.payload.headers, 'From') + ', ' + getHeader(message.payload.headers, 'To')+ ', ' + getHeader(message.payload.headers, 'Cc');
            if (jQuery.inArray("SENT", message.labelIds) != -1) {
                sent = 1;
                getImageEmail = getHeader(message.payload.headers, 'Delivered-To');
                var reply_to_emails = getHeader(message.payload.headers, 'To')+ ', ' + getHeader(message.payload.headers, 'Cc');
            }else{
                var to_data_split = getHeader(message.payload.headers, 'To').split(',');  
                to_data_split.forEach(function (to_email_data) {   
                   var to_email_data_split = to_email_data.split('<');
                   if(to_email_data_split.length>1){
                    var to_orignal_email = to_email_data_split[1].replace('>',''); 
                    if(to_orignal_email != gmail_current_account.email){                       
                            to_me_text += ', ' + to_email_data;
                        } 
                   }else{
                       if(to_email_data != gmail_current_account.email){                       
                            to_me_text += ', ' + to_email_data;
                        } 
                   }
                }); 
                
                if(getHeader(message.payload.headers, 'Cc') != ""){
                    var cc_data_split = getHeader(message.payload.headers, 'Cc').split(',');  
                    cc_data_split.forEach(function (cc_email_data) {   
                       var cc_email_data_split = cc_email_data.split('<');
                       if(cc_email_data_split.length>1){
                        var cc_orignal_email = cc_email_data_split[1].replace('>',''); 
                        if(cc_orignal_email != gmail_current_account.email){                       
                                to_me_text += ', ' + cc_email_data;
                            } 
                       }else{
                           if(cc_email_data != gmail_current_account.email){                       
                                to_me_text += ', ' + cc_email_data;
                            } 
                       }
                    }); 
                }
                var reply_to_emails = getHeader(message.payload.headers, 'From');
            }
            
            var reply_all_count = 0;
            if(getHeader(message.payload.headers, 'Cc') == ''){
                var to_split = getHeader(message.payload.headers, 'To').split(',');
                console.log('to_split '+to_split.length);
                reply_all_count = to_split.length;
            }else{
                var to_cc_data = getHeader(message.payload.headers, 'To') +', '+ getHeader(message.payload.headers, 'Cc');
                var to_cc_split = to_cc_data.split(',');
                console.log('to_cc_split '+to_cc_split.length);
                reply_all_count = to_cc_split.length;
            }
                
                
            //starred
            var starred = 0;
            if (jQuery.inArray("STARRED", message.labelIds) != -1)
                starred = 1;

            var unread = 0;
            if (jQuery.inArray("UNREAD", message.labelIds) != -1)
                unread = 1;

            var showDraft = 0;
            if (jQuery.inArray("DRAFT", message.labelIds) != -1)
                showDraft = 1;

            var to_at = getHeader(message.payload.headers, 'To').toString().split('@');
            var to = to_at[0].toString().split('<');

            var hideShowContentDetails = "";
            var hideShowContentDetailsDisply = "";
            var notHideShowContentDetailsDisply = "";
            if (labelid == "SENT") {

                hideShowContentDetails = (count == total_messages || sent == 1) ? '' : 'hrgmail_readMial';
                hideShowContentDetailsDisply = (count == total_messages || sent == 1) ? '' : 'display_none';
                notHideShowContentDetailsDisply = (count == total_messages || sent == 1) ? 'display_none' : '';
            } else {
                //if (total_messages > 2) { // show hide error
                    hideShowContentDetails = (count == total_messages) ? '' : 'hrgmail_readMial';
                    hideShowContentDetailsDisply = (count == total_messages) ? '' : 'display_none';
                    notHideShowContentDetailsDisply = (count == total_messages) ? 'display_none' : '';
                //}

            }


            if (showDraft == 0) {
                //messages contents
                $(".hrgmail_dynamic_thread_messages").append(
                        '<div class="hrgmail_dynamic_thread_message_' + count + ' hrgmail_readmailMessages ' + hideShowContentDetails + '">\
                          <input type="hidden" class="reply_to_emails" value="'+ reply_to_emails +'">\
                          <input type="hidden" class="reply_to_all_emails" value="'+ reply_to_all_emails +'">\
                          <div class="hrgmail_readmailTitle_profile clearfix">\
                            <div class="hrgmail_usrProfile clearfix">\
                                <div class="hrgmail_usrProfilePic"> <img src="//ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png"> </div>\
                                <div class="hrgmail_usrProfileName clearfix"> <span></span><br/>\
                                    <div class="hrgmailuserdetail">\
                                        <b class="' + hideShowContentDetailsDisply + '">' + lang.gmailToSmall + ' ' + ((sent == 1) ? getHeader(message.payload.headers, 'To').replace(' <','<') : to_me_text) + '</b>\
                                        <p class="' + notHideShowContentDetailsDisply + '">' + getSubStr(message.snippet, 75) + '</p>\
                                        <div class="hrgmailmailerInfo clearfix" style="display: none;">\
                                            <div class="hrgmailmailerInfoInner clearfix">\
                                                <ul><li></li></ul>\
                                            </div>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                            <div class="hrgmail_hdr_formatBar_right">\
                                <ul>\
                                    <li><div class="hrgmail_mailsOut_ofNo"> <strong class="hrgmail_date">' + dateFormate(getHeader(message.payload.headers, 'Date')) + '</strong> </div></li>\
                                    <li><div class="hrgmail_mailsOut_ofNo"> <div class="hrgmailstarredInner"><label class="' + ((starred == 1) ? 'select' : '') + '"><input type="checkbox" value="' + message.id + '"></label></div> </div></li>\
                                    <li class="hrgmail_reply_forward_options ' + hideShowContentDetailsDisply + '">\
                                      <div class="hrgmail_reply_forward_btnType hrgmail_show_reply_forward">\
                                        <span class="hrgmail_replybtn"><i></i></span>\
                                        <span class="hrgmail_hdr_srchDropDown"><i></i></span>\
                                        </div>\
                                    </li>\
                                </ul>\
                            </div>\
                            <div class="hrgmail_reply_forward_options_list">\
                                <ul data-id="' + count + '" data-messageid="' + message.id + '" data-headermessageid="' + getHeader(message.payload.headers, 'Message-ID') + '"  >\
                                    <div class="appendreplytext display_none">' + append_reply_text + '</div>\
                                    <div class="appendforwardtext display_none">' + append_forward_text + '</div>\
                                    <li data-id="reply"><div class="hrgmail_reply_option_li"></div>' + lang.gmailReply + '</li>\
                                    '+ ((reply_all_count>1) ? '<li data-id="reply_all"><div class="hrgmail_reply_option_li"></div>' + lang.gmailReplyToAll + '</li>' : '') +'\
                                    <li data-id="forward"><div class="hrgmail_forward_option_li"></div>' + lang.gmailForward + '</li>\
                                    <li data-id="delete">' + lang.gmailDeleteMsg + '</li>\
                                    <li data-id="unread">' + lang.gmailMarkUnread + '</li>\
                                </ul>\
                            </div>\
                          </div>\
                          <div class="hrgmail_readmailContent ' + hideShowContentDetailsDisply + '">\
                            <div class="hrgmail_readmail_text">\
                                <div class="hrgmail_message_contents"><iframe width="100%" scrolling="no" id="message-iframe-' + message.id + '" srcdoc="<p>' + lang.gmailLoading + '...</p>"></iframe></div>\
                                <div class="hrgmail_attachmail_content"></div>\
                            </div>\
                           </div>\
                        </div>\
                    ');
                 
                $(".hrgmail_reply_forward_options_list").hide();
                    
                var dynamic_el = $(".hrgmail_dynamic_thread_message_" + count);                
                
                var from_data = getHeader(message.payload.headers, 'From');
                var from_data_split = getHeader(message.payload.headers, 'From').split('<');                        
                var mailed_by_split = from_data.split('@');                        
                var mailed_by = mailed_by_split[1].replace('>',"");                     
                
                if(from_data_split[0] == ""){
                    var from_data = from_data.replace('<',"").replace('>',"");                
                }

                var replyto_data = getHeader(message.payload.headers, 'Reply-To');
                var replyto_data_split = getHeader(message.payload.headers, 'Reply-To').split('<');                        
                if(replyto_data_split[0] == ""){
                    var replyto_data = replyto_data.replace('<',"").replace('>',"");                
                }                

                dynamic_el.find(".hrgmail_usrProfileName span").text(from_data);
                if (getHeader(message.payload.headers, 'From') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailFrom + ':</label><span class="wz-selectable">' + from_data.replace('<','&lt;').replace('>','&gt;') + '</span></div></li>');
                if (getHeader(message.payload.headers, 'Reply-To') != '')
                dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailReplyTo + ':</label><span class="wz-selectable">' + replyto_data.replace('<','&lt;').replace('>','&gt;') + '</span></div></li>');
                if (getHeader(message.payload.headers, 'To') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailToSmall + ':</label><span class="wz-selectable">' + escapeHtml(getHeader(message.payload.headers, 'To'))  + '</span></div></li>');
                if (getHeader(message.payload.headers, 'Cc') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>cc:</label><span class="wz-selectable">' + escapeHtml(getHeader(message.payload.headers, 'Cc'))  + '</span></div></li>');
                if (getHeader(message.payload.headers, 'Date') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailDate + ':</label><span class="wz-selectable">' + gmail_full_date_formate(getHeader(message.payload.headers, 'Date')) + '</span></div></li>');
                if (getHeader(message.payload.headers, 'Subject') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailSubjectSmall + ':</label><span class="wz-selectable">' + getHeader(message.payload.headers, 'Subject') + '</span></div></li>');
                    
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>mailed-by:</label><span class="wz-selectable">' + mailed_by + '</span></div></li>');
                if (jQuery.inArray("IMPORTANT", message.labelIds) != -1)
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label class="select"><input type="checkbox">:</label><span class="wz-selectable">' + lang.gmailtoMeImportant + '</span></div></li>');
                
                
                //console.log('getImageEmail '+getImageEmail);
                gmail_current_account.getAvatarURL(getImageEmail, function (error, avatar) {
                    
                    if(error)
                        gmailErrorHandling(error);
                    
                    if (avatar != null) {
                        console.log('avatar data: ' + avatar);
                        dynamic_el.find(".hrgmail_usrProfilePic img").attr('src', avatar);
                    }
                });
                
                
                //testtttttttttttttttttttt                                 
                append_iframe_contents(message,dynamic_el);
                
            count++;
            
            } else {
                create_reply_draft_compose_box(message.threadId);
            }
            
        } 
            totalCounts();
        });


        $("#detailPageIds").val(messages_ids_array.join(","));

    });
    hideError();
});

// append message contents in iframe
function append_iframe_contents(message,dynamic_el)
{
    $('#message-iframe-' + message.id).load(function () {         
        
    getBody(message)
    .done(function(message,iframe_html) {

        console.log("iframe load");        
        var iframe_css =
                "<style>\
                    body, td {font-family: 'arial'; color:#222; word-break: break-word;}\
                    blockquote{margin: 0px 0px 0px 0.8ex;border-left: 1px solid rgb(204, 204, 204);padding-left: 1ex;}\
                    .iframe-content{font-size: 85%;}\
                    .hrgmail_threedot{ height: 8px; background-color: #e6e3e3; border: 1px solid #b5afaf; line-height: 2px; font-weight: bold;width: 16px;padding-left: 4px; cursor: pointer; opacity: 0.3;margin: 12px 0 20px 0;}\
                </style>";
        var iframe_js =
                '<script> \
                    var a_links = document.getElementById("message-iframe-' + message.id + '").contentWindow.document.getElementsByTagName("a");\
                    for(var i=0; i<a_links.length; i++){\
                        a_links[i].target = "_blank";  \
                    }\
                </script>';

                  console.log("appending iframe html");
        
        iframe_html = iframe_html.replace(three_dots_html, "");  
        
        var iframe = $('#message-iframe-' + message.id)[0].contentWindow.document;
        $('body', iframe).html(iframe_js + iframe_css + "<div class='iframe-content'> " + iframe_html + "</div>");

        console.log("appended iframe html");
        
        
        
        setTimeout(function () {
            $('#message-iframe-' + message.id).contents().find(".hrgmail_threedot").remove();
            
            $('#message-iframe-' + message.id).contents().find(".hrgmail_reply_content").css('display','block');
            
            refresh_iframe_height(message.id);
            auto_refresh_iframe_height(message.id);

            // Adding three dots before old message contents    
            var gmail_extra = $('#message-iframe-' + message.id).contents().find(".gmail_extra:first");                        
            $(three_dots_html).insertBefore(gmail_extra);

            // Hiding all contents that are in three dots ...
            $('#message-iframe-' + message.id).contents().find(".gmail_extra").hide();
            refresh_iframe_height(message.id);

            // Hide / Show contents when click on three dots ...
            $('#message-iframe-' + message.id).contents().find(".hrgmail_threedot").on('click', function () 
            {
                $(this).next(".gmail_extra").toggle();
                refresh_iframe_height(message.id);
            });
            
            $('#message-iframe-' + message.id).contents().find("body").on('click', function (e)
            {
                e.stopPropagation();
                $('#hrgmail_labelas').hide();
                $('#hrgmail_moveto').hide();
                $('#hrgmail_unread').hide();
                $('.hrgmailmailerInfo').hide();
                $('.hrgmail_reply_forward_options_list').hide();
            });
            
/*            $('.hrgmail_scroll_content').mCustomScrollbar({
               advanced:{ extraDraggableSelectors: $('#message-iframe-' + message.id).contents().get() },
               // autoUpdateTimeout: 10
                //advanced:{ releaseDraggableSelectors: $('#message-iframe-160ba73e7ee85b82').contents().find("body") },
            });*/


            $('#message-iframe-' + message.id).contents().find("body").on('mousewheel', function (e, delta,x,y) {
                e.preventDefault();
                
                var scrollTopDelta = -1 * y * 2.5 //delta > 0 ? -250 : 250;
                var scrollerOuter = $('.hrgmail_scroll_content');
                var dragger = scrollerOuter.find('.mCSB_dragger');
                var scrollHeight = scrollerOuter.find('.mCSB_container').height();
                var draggerTop = dragger.position().top;


                var scrollTop = draggerTop / (scrollerOuter.height() - dragger.height()) * (scrollHeight - scrollerOuter.height());
                //console.log("scrollTop "+ scrollTop + " scrollTopDelta "+ scrollTopDelta);
                var mscScrollTop = scrollTop + scrollTopDelta;
                if (scrollTop < y && scrollTopDelta < 0)
                    mscScrollTop = 0;
                
                $('.hrgmail_scroll_content').mCustomScrollbar("scrollTo", mscScrollTop, {
                    scrollInertia: 800,
                    scrollEasing:"easeOut"
                });
            });

        }, 100);

    //});                                

    // Show attachments        
    if (message.payload.parts || message.payload.body.attachmentId) 
    {
        var attCount = 1;
        if(message.payload.body.attachmentId){
            
            if (attCount == 1)
                    dynamic_el.find(".hrgmail_attachmail_content").html('<div class="hrgmail_attachmail clearfix"></div>');

                dynamic_el.find(".hrgmail_attachmail").append(
                        '<div class="hrgmail_attachmailInner">\
                            <div class="hrgmail_content"></div>\
                            <div class="hrgmail_content clearfix hrGmailsaveDriveMain" data-filename="' + message.payload.filename + '" data-attachment_id="' + message.payload.body.attachmentId + '" data-message_id="' + message.id + '" title="'+ lang.gmailSaveToHorbito +'">\
                                <div class="hrgmail_inner clearfix">\
                                    <div class="hrgmailAttachcot">\
                                        <span><img src="https://static.horbito.com/app/522/icon_2_archive_x16.png" alt="#" ></span>\
                                    </div>\
                                    <div class="hrgmail_attachDetail">\
                                        <h3>' + message.payload.filename + '</h3>\
                                        <b>' + bytesToSize(message.payload.body.size) + '</b>\
                                    </div>\
                                </div>\
                                <div class="hrGmailDownload clearfix">\
                                    <a class="hrGmailDownload hrGmailDownloadMain" title="'+ lang.gmailDownload +'" href="https://mail.google.com/mail/u/0/?ui=2&ik=bab08d0eee&view=att&th=' + message.id + '&attid=0&disp=safe"></a>\
                                    <a class="hrGmailsaveDrive"  href="javascript:void(0)"></a>\
                                </div>\
                            </div>\
                        </div>\
                    ');
                attCount++;
                
        }
        
        if(message.payload.parts){
            message.payload.parts.forEach(function (attachment) {                        

            if (attachment.body.attachmentId) {

               if(attachment.mimeType != "text/html"){

                if (attCount == 1)
                    dynamic_el.find(".hrgmail_attachmail_content").html('<div class="hrgmail_attachmail clearfix"></div>');

                dynamic_el.find(".hrgmail_attachmail").append(
                        '<div class="hrgmail_attachmailInner">\
                            <div class="hrgmail_content"></div>\
                            <div class="hrgmail_content clearfix hrGmailsaveDriveMain" data-filename="' + attachment.filename + '" data-attachment_id="' + attachment.body.attachmentId + '" data-message_id="' + message.id + '" title="'+ lang.gmailSaveToHorbito +'">\
                                <div class="hrgmail_inner clearfix">\
                                    <div class="hrgmailAttachcot">\
                                        <span><img src="https://static.horbito.com/app/522/icon_2_archive_x16.png" alt="#" ></span>\
                                    </div>\
                                    <div class="hrgmail_attachDetail">\
                                        <h3>' + attachment.filename + '</h3>\
                                        <b>' + bytesToSize(attachment.body.size) + '</b>\
                                    </div>\
                                </div>\
                                <div class="hrGmailDownload clearfix">\
                                    <a class="hrGmailDownload hrGmailDownloadMain" title="'+ lang.gmailDownload +'" href="https://mail.google.com/mail/u/0/?ui=2&ik=bab08d0eee&view=att&th=' + message.id + '&attid=0.' + attCount + '&disp=safe"></a>\
                                    <a class="hrGmailsaveDrive"  href="javascript:void(0)"></a>\
                                </div>\
                            </div>\
                        </div>\
                    ');
                attCount++;
                }
            }
        });
        }
        
    }


});

});
}

// refresh height of message iframe
function refresh_iframe_height(message_id)
{
    // Added little delay
    setTimeout(function(){
        newHeight = $('#message-iframe-' + message_id)[0].contentWindow.document.body.scrollHeight;
        $('#message-iframe-' + message_id).attr("height", newHeight  + message_iframe_bottom_padding);                            

    }, 10);
}

// This will automatically refresh height for some seconds
function auto_refresh_iframe_height(message_id)
{
    dynamic_var['iframe_interval_count_' + message_id] = 1;    
    dynamic_var['iframe_interval_' + message_id] = setInterval(function(){    
        
//        console.log("Calling " + message_id + " iframe " + dynamic_var['iframe_interval_count_' + message_id]);
        refresh_iframe_height(message_id);

        // Almost 10 seconds
        if(dynamic_var['iframe_interval_count_' + message_id] >= 20){
            clearInterval(dynamic_var['iframe_interval_' + message_id]); 
            dynamic_var['iframe_interval_count_' + message_id] = 1; 
        }

        dynamic_var['iframe_interval_count_' + message_id] = dynamic_var['iframe_interval_count_' + message_id] + 1;    
    }, 300);    
}

//message search
gmail_win.on('keypress', '#hrgmail_search', function (e)
{
    if (e.which == 13 && $(this).val() != "") {
        gmail_preload();
        gmail_show_messages('ALL', 'ALL');
    }
});

// Refresh messages
gmail_win.on('click', '.reload_messages', function (e)
{    
    if (!$(".hrgmail_mailsContent ul li div").hasClass("hrgmail_noEmail")) {
//        gmail_postload();
//        
//        var total_array_length = gmail_pagination.length;
//        gmail_pagination.splice(total_array_length - 1, 1);
        gmail_preload();
        grmail_refresh_messages();
    }

});

// Add new account
gmail_win.on('click', '.add-account', function ()
{
    api.integration.gmail.addAccount(function (error, account) {
        
        if(error)
           gmailErrorHandling(error);   
    
        //if(account){
            gmail_show_message(lang.gmailAccountAddSuccesssedMsg, lang.gmailaddGmailAccountMsg);
            show_accounts();
        //}
        
    });
});

// Remove account
gmail_win.on('click', '.remove-account', function (e)
{
    e.stopPropagation();
    var account_id = $(this).data("id");

    confirm(lang.gmailRemoveAccountMsg, function (accepted) {
        if (accepted) {
            api.integration.gmail.removeAccount(account_id, function () {
                gmail_show_message(lang.gmailRemoveAccountSuccessMsg, lang.gmailRemoveGmailAccountSuccessMsg);
                show_accounts();
            });
        }
    });

});

// Load account messages
gmail_win.on('click', '.switch-account', function ()
{
    $('.switch-account').removeClass("hrgmail_active");
    $(this).addClass("hrgmail_active");
    var account = gmail_accounts[$(this).data("id")];
    $("#chatbox-html").find(".chatbox-html .close_chatbox").click();
    gmail_select_account(account);
});

//Simple jquery
gmail_win.css({'border-radius': '6px', 'background-color': '#2c3238'});

gmail_win.on('click', '.hrgmail_allRead_drop_slct', function ()
{
    $('#hrgmail_allCheck').toggle();
});

// move to toggle
gmail_win.on('click', '.hrgmail_moveto_btn', function (e)
{
    e.stopPropagation();
    $('#hrgmail_unread').hide();
    $('#hrgmail_labelas').hide();
    $('.hrgmail_reply_forward_options_list').hide();
    $('#hrgmail_moveto').toggle();
});

gmail_win.on('click', '.hrgmail_moveto_btn input', function (e)
{
    e.stopPropagation();
    $('#hrgmail_moveto').show();
});

// label as to toggle
gmail_win.on('click', '.hrgmail_labelas_btn', function (e)
{
    e.stopPropagation();
    $('#hrgmail_unread').hide();
    $('#hrgmail_moveto').hide();
    $('.hrgmail_reply_forward_options_list').hide();
    $('#hrgmail_labelas').toggle();
});

gmail_win.on('click', '.hrgmail_labelas_btn input', function (e)
{
    e.stopPropagation();
    $('#hrgmail_labelas').show();
});


gmail_win.on('change', '#hrgmail_labelas input[type="checkbox"]', function (e)
{
    e.stopPropagation();
    $('#hrgmail_labelas').show();
    $(this).prop('checked', this.checked);
    if ($(this).parent('label').hasClass('select')) {
        $(this).parent('label').removeClass('select');
    } else {
        $(this).parent('label').addClass('select');
    }

    if ($("#hrgmail_labelas input[type='checkbox']:checked").length > 0) {
        $("#hrgmail_labelas .lastParmotons").show();
    } else {
        $("#hrgmail_labelas .lastParmotons").hide();
    }
});

gmail_win.on('click', '#hrgmail_labelas .lastParmotons ul li span', function ()
{
    var allLabels = $("#hrgmail_labelas input[type='checkbox']:checked").map(function () {
        return this.value;
    }).get();
    var addLabels = allLabels.toString().split(',');
    gmail_modified_labels(addLabels, "")

});

gmail_win.on('click', '.ui-header-search, .ui-header-bottom, .gmail-content', function (e)
{
    e.stopPropagation();
    $('#hrgmail_labelas').hide();
    $('#hrgmail_moveto').hide();
    $('#hrgmail_unread').hide();
    $('.hrgmailmailerInfo').hide();
    $('.hrgmail_reply_forward_options_list').hide();
});

gmail_win.on('click', '.hrgmailuserdetail b', function (e)
{
    e.stopPropagation();
    //$('.hrgmailmailerInfo').hide();
    $('.hrgmail_reply_forward_options_list').hide();
    $(this).parents(".hrgmailuserdetail").children('.hrgmailmailerInfo').toggle();
});

gmail_win.on('click', '.hrgmailmailerInfo', function (e)
{
    e.stopPropagation();    
});


gmail_win.on('click', '#hrgmail_moveto ul li span', function (e)
{
    
    var removeLabelid = $("#labelid").val();
    var addLabelid = $(this).data("id");
    if (removeLabelid == "INBOX" || removeLabelid == "IMPORTANT" || removeLabelid == "TRASH" || removeLabelid == "SPAM")
        gmail_modified_labels([addLabelid], [removeLabelid]);
});

gmail_win.on('click', '.hrgmail_allRead_drop_chckBox input', function ()
{
    $(this).parent().stop().toggleClass("hrgmail_check_input");
});

gmail_win.on('click', '.hrgmail_allRead_more', function (e)
{
    e.stopPropagation();
    $('#hrgmail_labelas').hide();
    $('#hrgmail_moveto').hide();
    $('.hrgmail_reply_forward_options_list').hide();
    $('#hrgmail_unread').toggle();

    var read_li, unread_li, important_li, not_important_li, add_star_li, remove_star_li;
    read_li = unread_li = important_li = not_important_li = add_star_li = remove_star_li = 0;

    if ($("#detailPage").val() == 1) {
        read_li = 1;
        add_star_li = 1;
        remove_star_li = 0;
        not_important_li = 0;
        important_li = 1;
        if ($(".hrgmailstarredInner label.select").length) {
            remove_star_li = 1;
            add_star_li = 0;
        }
        if ($(".hrgmailimoprtantInner label").hasClass("select")) {
            not_important_li = 1;
            important_li = 0;
        }

    } else {

        $(".allChecked:checked").map(function () {
            var this_li = $(this).parents("li");
            // unread exist
            if (this_li.data('unread') == 1 && unread_li != 1) {
                unread_li = 1;
            }
            if (this_li.data('unread') == 2 && read_li != 1) {
                read_li = 1;
            }
            if (this_li.data('important') == 1 && not_important_li != 1) {
                not_important_li = 1;
            }
            if (this_li.data('important') == 2 && important_li != 1) {
                important_li = 1;
            }
            if (this_li.data('starred') == 1 && remove_star_li != 1) {
                remove_star_li = 1;
            }
            if (this_li.data('starred') == 2 && add_star_li != 1) {
                add_star_li = 1;
            }
        });

    }

    if (read_li == 0 && unread_li == 0 && important_li == 0 && not_important_li == 0 && add_star_li == 0 && remove_star_li == 0) {
        $("#hrgmail_unread ul").html('<li><span data-id="all-read">' + lang.gmailMarkAllRead + '</span></li>');
        $(".hrgmail_selectMessages").show();
    } else {
        $(".hrgmail_selectMessages").hide();

        $("#hrgmail_unread ul").html('');
        var hrgmail_unread_html = '';

        if (unread_li == 1) {
            hrgmail_unread_html += '<li><span data-id="read">' + lang.gmailMarkAsRead + '</span></li>';
        }
        if (read_li == 1) {
            hrgmail_unread_html += '<li><span data-id="unread">' + lang.gmailMarkAsUnread + '</span></li>';
        }
        if (important_li == 1) {
            hrgmail_unread_html += '<li><span data-id="important">' + lang.gmailMarkImportant + '</span></li>';
        }
        if (not_important_li == 1) {
            hrgmail_unread_html += '<li><span data-id="not_important">' + lang.gmailMarkNotImportant + '</span></li>';
        }
        if (add_star_li == 1) {
            hrgmail_unread_html += '<li><span data-id="add_star">' + lang.gmailAddStar + '</span></li>';
        }
        if (remove_star_li == 1) {
            hrgmail_unread_html += '<li><span data-id="remove_star">' + lang.gmailRemoveStar + '</span></li>';
        }
        $("#hrgmail_unread ul").html(hrgmail_unread_html);
    }
});

// check all checkbox of message list
gmail_win.on('change', '#checkAll', function (e)
{
    if (!$(".hrgmail_mailsContent ul li div").hasClass("hrgmail_noEmail")) {

        $("#hrgmail_allCheck").hide();
        $(this).prop('checked', this.checked);
        $('.allChecked').prop('checked', this.checked);

        if (this.checked) {
            $(".allChecked").parent("label").addClass("hrgmail_check_input");
            $(".allChecked").parents("li").find(".hrgmail_readMial").css("background", "#ffc");
            $(".allChecked").parents("li").find(".hrgmail_unReadMial").css("background", "#ffc");
            $(".allChecked").parents("li").find(".ho_gmail_mailDate").css("background", "#ffc");
            $(".allChecked").parents("li").find(".hrgmail_unReadMialDate").css("background", "#ffc");
        } else {
            $(".allChecked").parent("label").removeClass("hrgmail_check_input");
            $(".allChecked").parents("li").find(".hrgmail_readMial").css("background", "#f5f6f5");
            $(".allChecked").parents("li").find(".hrgmail_unReadMial").css("background", "#fff");
            $(".allChecked").parents("li").find(".ho_gmail_mailDate").css("background", "#f5f6f5");
            $(".allChecked").parents("li").find(".hrgmail_unReadMialDate").css("background", "#fff");
        }
        gmail_multi_messages_checked();
    }
});

// check single checkbox of message list
gmail_win.on('change', '.allChecked', function (e)
{
    $(this).prop('checked', this.checked);
    if (this.checked) {
        $(this).parents("li").find(".hrgmail_readMial").css("background", "#ffc");
        $(this).parents("li").find(".hrgmail_unReadMial").css("background", "#ffc");
        $(this).parents("li").find(".ho_gmail_mailDate").css("background", "#ffc");
        $(this).parents("li").find(".hrgmail_unReadMialDate").css("background", "#ffc");
    } else {
        $(this).parents("li").find(".hrgmail_readMial").css("background", "#f5f6f5");
        $(this).parents("li").find(".hrgmail_unReadMial").css("background", "#fff");
        $(this).parents("li").find(".ho_gmail_mailDate").css("background", "#f5f6f5");
        $(this).parents("li").find(".hrgmail_unReadMialDate").css("background", "#fff");
    }

    gmail_multi_messages_checked();
});

// click on multi checkbox of messages list
gmail_win.on('click', '#hrgmail_allCheck ul li span', function ()
{
    var check_val = $(this).data("id");
    $('.allChecked').prop("checked", false);
    $('#checkAll').prop("checked", false);
    $(".allChecked").parent("label").removeClass("hrgmail_check_input");
    $("#checkAll").parent("label").removeClass("hrgmail_check_input");
    $(".allChecked").parents("li").find(".hrgmail_readMial").css("background", "#f5f6f5");
    $(".allChecked").parents("li").find(".hrgmail_unReadMial").css("background", "#fff");
    $(".allChecked").parents("li").find(".ho_gmail_mailDate").css("background", "#f5f6f5");
    $(".allChecked").parents("li").find(".hrgmail_unReadMialDate").css("background", "#fff");
            
    if (check_val == 'all') {
        $('#checkAll').prop("checked", true);
        $("#checkAll").parent("label").addClass("hrgmail_check_input");
        $('.allChecked').prop("checked", true);
        $(".allChecked").parent("label").addClass("hrgmail_check_input");
        $(".allChecked").parents("li").find(".hrgmail_readMial").css("background", "#ffc");
        $(".allChecked").parents("li").find(".hrgmail_unReadMial").css("background", "#ffc");
        $(".allChecked").parents("li").find(".ho_gmail_mailDate").css("background", "#ffc");
        $(".allChecked").parents("li").find(".hrgmail_unReadMialDate").css("background", "#ffc");
    } else if (check_val == 'read') {
        $(".hrgmail_mailsContent ul li").each(function () {
            if ($(this).data('unread') == 2) {
                $(this).find('.allChecked').prop("checked", true);
                $(this).find(".hrgmail_check_mail label").addClass("hrgmail_check_input");
                $(this).find(".hrgmail_readMial").css("background", "#ffc");
                $(this).find(".hrgmail_unReadMial").css("background", "#ffc");
                $(this).find(".ho_gmail_mailDate").css("background", "#ffc");
                $(this).find(".hrgmail_unReadMialDate").css("background", "#ffc");
            }
        });
    } else if (check_val == 'unread') {
        $(".hrgmail_mailsContent ul li").each(function () {
            if ($(this).data('unread') == 1) {
                $(this).find('.allChecked').prop("checked", true);
                $(this).find(".hrgmail_check_mail label").addClass("hrgmail_check_input");
                $(this).find(".hrgmail_readMial").css("background", "#ffc");
                $(this).find(".hrgmail_unReadMial").css("background", "#ffc");
                $(this).find(".ho_gmail_mailDate").css("background", "#ffc");
                $(this).find(".hrgmail_unReadMialDate").css("background", "#ffc");
            }
        });
    } else if (check_val == 'starred') {
        $(".hrgmail_mailsContent ul li").each(function () {
            if ($(this).data('starred') == 1) {
                $(this).find('.allChecked').prop("checked", true);
                $(this).find(".hrgmail_check_mail label").addClass("hrgmail_check_input");
                $(this).find(".hrgmail_readMial").css("background", "#ffc");
                $(this).find(".hrgmail_unReadMial").css("background", "#ffc");
                $(this).find(".ho_gmail_mailDate").css("background", "#ffc");
                $(this).find(".hrgmail_unReadMialDate").css("background", "#ffc");
            }
        });
    } else if (check_val == 'unstarred') {
        $(".hrgmail_mailsContent ul li").each(function () {
            if ($(this).data('starred') == 2) {
                $(this).find('.allChecked').prop("checked", true);
                $(this).find(".hrgmail_check_mail label").addClass("hrgmail_check_input");
                $(this).find(".hrgmail_readMial").css("background", "#ffc");
                $(this).find(".hrgmail_unReadMial").css("background", "#ffc");
                $(this).find(".ho_gmail_mailDate").css("background", "#ffc");
                $(this).find(".hrgmail_unReadMialDate").css("background", "#ffc");
            }
        });
    }

    gmail_multi_messages_checked();
});


// labels functionality
// mark as archive
gmail_win.on('click', '#hrgmail-archive-button', function (e)
{
    gmail_modified_labels('', ["INBOX"]);
    gmail_show_message(lang.gmailSuccess, lang.gmailArchiveMsg);
});
// mark as spam
gmail_win.on('click', '#hrgmail-spam-button', function (e)
{
    gmail_modified_labels(["SPAM"], ["INBOX"]);
    gmail_show_message(lang.gmailSuccess, lang.gmailMarkedSpamMsg);
});
gmail_win.on('click', '#hrgmail-trash-spam-button', function (e)
{
    gmail_modified_labels(["SPAM"], ["INBOX"]);
    gmail_show_message(lang.gmailSuccess, lang.gmailMarkedSpamMsg);
});
// mark as trash
gmail_win.on('click', '#hrgmail-remove-button', function (e)
{
    gmail_modified_labels(["TRASH"], ["INBOX"]);
    gmail_show_message(lang.gmailDeletedMsg, lang.gmailTrashMsg);
});
// move to inbox
gmail_win.on('click', '.hrgmail_move_to_inbox span', function (e)
{
    gmail_modified_labels(["INBOX"], "");
    gmail_show_message(lang.gmailSuccess, lang.gmailMoveToInboxMsg);
});
// discard drafts
gmail_win.on('click', '.hrgmail_discard_drafts span', function (e)
{
    gmail_delete_draft();
});
// delete forever
gmail_win.on('click', '.hrgmail_delete_forever span', function (e)
{
    gmail_delete_messages();
    gmail_show_message(lang.gmailDeletedMsg, lang.gmailDeletedConversationMsg);
});
// not spam
gmail_win.on('click', '.hrgmail_not_spam span', function (e)
{
    gmail_modified_labels("", ["SPAM"]);
    gmail_show_message(lang.gmailSuccess, lang.gmailMovedToInbox);
});

// mark as more option
gmail_win.on('click', '#hrgmail_unread ul li span', function (e)
{
    //nextPageToken = '';
    //gmail_pagination = [];

    var option_type = $(this).data("id");
    if (option_type == "read") {
        gmail_modified_labels("", ["UNREAD"]);
    } else if (option_type == "unread") {
        gmail_modified_labels(["UNREAD"], "");
    } else if (option_type == "important") {
        gmail_modified_labels(["IMPORTANT"], "");
    } else if (option_type == "not_important") {
        gmail_modified_labels("", ["IMPORTANT"]);
    } else if (option_type == "add_star") {
        gmail_modified_labels(["STARRED"], "");
    } else if (option_type == "remove_star") {
        gmail_modified_labels("", ["STARRED"]);
    } else if (option_type == "all-read") {
        var allVals = $("input[name=allChecked]").map(function () {
            return this.value;
        }).get();
        var ids = allVals.toString().split(',');
        removeLabels(ids, ["UNREAD"]);
        gmail_postload();
        grmail_refresh_messages();
    }
});

//add remove star label
gmail_win.on('click', '.hrgmailStarred label', function ()
{
    var allVals = $(this).parents("li").data('id');
    var ids = allVals.toString().split(',');
    if ($(this).hasClass('select')) {
        removeLabels(ids, ["STARRED"]);
        $(this).removeClass('select');
    } else {
        addLabels(ids, ["STARRED"]);
        $(this).addClass('select');
    }
});

//add remove star label in message details page
gmail_win.on('click', '.hrgmailstarredInner label', function (e)
{
    e.stopPropagation();
    var id = $(this).find("input").val();
    if ($(this).hasClass('select')) {
        removeLabels([id], ["STARRED"]);
        $(this).removeClass('select');
    } else {
        addLabels([id], ["STARRED"]);
        $(this).addClass('select');
    }
});

//add remove important label
gmail_win.on('click', '.hrgmaillistGmail label', function ()
{
    var allVals = $(this).parents("li").data('id');
    var ids = allVals.toString().split(',');
    if ($(this).hasClass('select')) {
        removeLabels(ids, ["IMPORTANT"]);
        $(this).removeClass('select');
    } else {
        addLabels(ids, ["IMPORTANT"]);
        $(this).addClass('select');
    }
});

//add remove important label in message details page
gmail_win.on('click', '.hrgmailimoprtantInner label', function ()
{
    var allVals = $("#detailPageIds").val();
    var ids = allVals.toString().split(',');
    if ($(this).hasClass('select')) {
        removeLabels(ids, ["IMPORTANT"]);
        $(this).removeClass('select');
    } else {
        addLabels(ids, ["IMPORTANT"]);
        $(this).addClass('select');
    }
});

gmail_win.on('click', '.hrgmail_readmailTitle_profile', function ()
{
    $('.hrgmailmailerInfo').hide();
    $('.hrgmail_reply_forward_options_list').hide();
    var el = $(this).parents(".hrgmail_readmailMessages").find(".hrgmail_readmailContent");
    var el1 = $(this).parents(".hrgmail_readmailMessages");
    var snippet_el = $(this).find(".hrgmail_usrProfile .hrgmailuserdetail");
    if (el.hasClass("display_none")) {
        snippet_el.find("b").removeClass("display_none");
        snippet_el.find("p").addClass("display_none");
        $(this).parents(".hrgmail_readmailMessages").css({'background': '#fff'});
        el.removeClass("display_none");
        el1.find(".hrgmail_reply_forward_options").removeClass("display_none");
    } else {
        snippet_el.find("p").removeClass("display_none");
        snippet_el.find("b").addClass("display_none");
        $(this).parents(".hrgmail_readmailMessages").css({'background': '#f5f6f5'});
        el.addClass("display_none");
        el1.find(".hrgmail_reply_forward_options").addClass("display_none");
    }

    // Getting message id and fixing height of iframe
    message_id = $(this).find('.hrgmail_reply_forward_options_list ul').data("messageid")
    refresh_iframe_height(message_id);    
});

gmail_win.on('click', '.hrgmail_readmailContent', function ()
{
    $('.hrgmailmailerInfo').hide();
});

// pagination next page
gmail_win.on('click', '.hrgmail_showMails_next', function (e)
{
    if (!$(this).hasClass('hrgmail_disabled')) {
        $(this).addClass('hrgmail_disabled');
        $("#fromPaginate").val(parseInt($("#fromPaginate").val()) + maxResults);
        $("#toPaginate").val(parseInt($("#toPaginate").val()) + maxResults);
        gmail_postload();
        grmail_refresh_messages();
    }
});

// pagination previous page
gmail_win.on('click', '.hrgmail_showMails_prev', function (e)
{
    if (!$(this).hasClass('hrgmail_disabled')) {
        $(this).addClass('hrgmail_disabled');
        $("#fromPaginate").val(parseInt($("#fromPaginate").val()) - maxResults);
        $("#toPaginate").val(parseInt($("#toPaginate").val()) - maxResults);

        var total_array_length = gmail_pagination.length;
        gmail_pagination.splice(total_array_length - 1, 1);
        if ($("#lastPage").val() == 1) {
            gmail_pagination.splice(total_array_length - 2, 1);
        }

        if (total_array_length > 2) {
            nextPageToken = gmail_pagination[total_array_length - 3].nextPageToken;
        } else {
            nextPageToken = '';
        }
        gmail_postload();
        grmail_refresh_messages();
    }

});

// replay hide show
gmail_win.on('click', '.hrgmail_click_here', function (e)
{
    var last_count = $(".hrgmail_dynamic_thread_messages .hrgmail_readmailMessages").length;

    gmail_reply_forward_chatbox_append(last_count, 'reply');

});

// forward hide show
gmail_win.on('click', '#hrgmail_click_here_forward', function (e)
{
    e.stopPropagation();
    var last_count = $(".hrgmail_dynamic_thread_messages .hrgmail_readmailMessages").length;

    gmail_reply_forward_chatbox_append(last_count, 'forward');
});

// reply forward options list hide show
gmail_win.on('click', '.hrgmail_hdr_srchDropDown', function (e)
{
    e.stopPropagation();
    $('#hrgmail_labelas').hide();
    $('#hrgmail_moveto').hide();
    $('#hrgmail_unread').hide();
    $('.hrgmailmailerInfo').hide();
    $('.hrgmail_reply_forward_options_list').hide();
    var parent_el = $(this).parents(".hrgmail_readmailMessages");
    parent_el.find(".hrgmailmailerInfo").hide();
    parent_el.find(".hrgmail_reply_forward_options_list").toggle();

});

// reply forward options li click funciton
gmail_win.on('click', '.hrgmail_reply_forward_options_list ul li', function (e)
{
    e.stopPropagation();
    var el = $(this);
    var parent_ul = $(this).parent('ul');
    $("#hrgmail_message_id_main_reply").val(parent_ul.data('headermessageid'));
    $("#hrgmail_append_reply_text_main_reply").val(parent_ul.find('.appendreplytext').html());
    $("#hrgmail_append_forward_text_main_reply").val(parent_ul.find('.appendforwardtext').html());
    parent_ul.parent(".hrgmail_reply_forward_options_list").hide();

    gmail_reply_forward_chatbox_append(parent_ul.data('id'), el.data('id'));

});

// reply btn funciton
gmail_win.on('click', '.hrgmail_replybtn i', function (e)
{
    e.stopPropagation();
    var parent_ul = $(this).parents('.hrgmail_readmailMessages').find(".hrgmail_reply_forward_options_list ul");
    $("#hrgmail_message_id_main_reply").val(parent_ul.data('headermessageid'));
    $("#hrgmail_append_reply_text_main_reply").val(parent_ul.find('.appendreplytext').html());
    parent_ul.parent(".hrgmail_reply_forward_options_list").hide();

    gmail_reply_forward_chatbox_append(parent_ul.data('id'), 'reply');
});


gmail_win.on('click', '.hrGmailDownloadMain', function (e)
{
   e.stopPropagation(); 
});
// save to horbito
gmail_win.on('click', '.hrGmailsaveDriveMain', function (e)
{
    var attachmentId = $(this).data("attachment_id");
    var messageId = $(this).data("message_id");
    var options = {
            title : 'Select destiny for the file',
            mode : 'file',
            name : $(this).data("filename")
        };
            
    api.fs.selectDestiny(options, function (error, response) {
            if(error)
                gmailErrorHandling(error);   
    
            if(response){
            
                console.log('Attachment response: ' + JSON.stringify(response));

                var filename = response.name;
                var folderId = response.destiny;

                console.log('messageId: ' + messageId + ' attachmentId: ' + attachmentId + ' filename: ' + filename + ' folderId: ' + folderId);

                gmail_current_account.fileToHorbito(messageId, attachmentId, filename, folderId, function (error, data) {                
                    if (error) {
                        gmail_show_message(lang.gmailError, lang.gmailSaveToHorbitoError);
                        console.log('Save to horbito error: ' + JSON.stringify(error));
                        return;
                    }

                    gmail_show_message(lang.gmailSuccess, lang.gmailSaveToHorbitoSuccess);
                    console.log('Save to horbito: ' + JSON.stringify(data));
                });
            }
        });
});

function gmail_append_attachment_files(id)
{
    dynamic_var['arrayFilesIds' + id] = [];
    dynamic_var['arrayFilesUrls' + id] = [];
    var fileNotAllowedTypesArray = ["ADE", "ADP", "BAT", "CHM", "CMD", "COM", "CPL", "EXE", "HTA", "INS", "ISP", "JAR", "JS", "JSE", "LIB", "LNK", "MDE", "MSC", "MSI", "MSP", "MST", "NSH", "PIF", "SCR", "SCT", "SHB", "SYS", "VB", "VBE", "VBS", "VXD", "WSC", "WSF", "WSH"];
    $(".hrgmail_fileName_" + id + " ul").html('');

    for (var i = 0; i < dynamic_var['arrayFiles' + id].length; i++)
    {
        //console.log('Attachment detail: ' + JSON.stringify(dynamic_var['arrayFiles' + id]));
        var errorMsg = errorStyle = '';
        var extension = dynamic_var['arrayFiles' + id][i].name.substr((dynamic_var['arrayFiles' + id][i].name.lastIndexOf('.') + 1));
        if (jQuery.inArray(extension.toUpperCase(), fileNotAllowedTypesArray) != -1) {
            var errorMsg = lang.gmailBlockedMsg;
            var errorStyle = 'style="color: #28292b;"';
            var removeType = 1;
        } else {
            var attUrl = '#';
            if (dynamic_var['arrayFiles' + id][i].url) {
                attUrl = dynamic_var['arrayFiles' + id][i].url;
                dynamic_var['arrayFilesUrls' + id].push({name: dynamic_var['arrayFiles' + id][i].name, URL: dynamic_var['arrayFiles' + id][i].url});
            } else {
                dynamic_var['arrayFilesIds' + id].push(parseInt(dynamic_var['arrayFiles' + id][i].id));
            }

            var removeType = 2;
        }
                
        $(".hrgmail_fileName_" + id + " ul").append(
            '<li><div class="hrgmail_fileName_main clearfix"> \
            <span><span ' + errorStyle + '>' + dynamic_var['arrayFiles' + id][i].name + ' </span>\
            <label>(' + bytesToSize(dynamic_var['arrayFiles' + id][i].size) + ')</label> \
            <label class="errorMsg">' + errorMsg + '</label> \
            <span class="remove-attachment" data-index="' + i + '" data-removeType="' + removeType + '" "></span>\
            </span></div></li>\
        ');
    }

    //console.log('ArrayFilesUrls : ' + JSON.stringify(dynamic_var['arrayFilesUrls' + id]));
    //console.log('arrayFilesIds : ' + JSON.stringify(dynamic_var['arrayFilesIds' + id]));

    $("#hrgmail_subject_" + id).blur();
}

function gmail_remove_attachment_file(id, index, removeType)
{
    dynamic_var['arrayFiles' + id].splice(index, 1);
    if (removeType == 2)
        dynamic_var['arrayFilesIds' + id].splice(index, 1);

    gmail_append_attachment_files(id);
}

function gmail_preload()
{
    $(".hrgmail_pagination").show();
    $("#fromPaginate").val(0);
    $("#toPaginate").val(maxResults);
    $('#checkAll').removeAttr("checked");
    $("#checkAll").parent("label").removeClass("hrgmail_check_input");
    $(".hrgmail_showMails_next").removeClass("hrgmail_disabled");
    nextPageToken = '';
    gmail_pagination = [];
    $(".refresh_messages").show();
    $(".checkbox_all").show();
    $(".hrgmail_mailsContent").show();
    $(".back_messages").hide();
    $(".hrgmail_mailsContentDetails").hide();
    $(".hrgmail_move_to_inbox").hide();
    $(".hrgmail_discard_drafts").hide();
    $(".hrgmail_delete_forever").hide();
    $(".hrgmail_not_spam").hide();
    $(".hrgmail_trash_report_spam").hide();
    $("#hrgmail_labelas .lastParmotons").hide();        
}

function gmail_postload()
{
    $(".hrgmail_pagination").show();
    $(".details_icons").hide();
    $(".refresh_messages").show();
    $(".checkbox_all").show();
    $(".hrgmail_mailsContent").show();
    $(".back_messages").hide();
    $(".hrgmail_mailsContentDetails").hide();
    $(".hrgmail_move_to_inbox").hide();
    $(".hrgmail_discard_drafts").hide();
    $(".hrgmail_delete_forever").hide();
    $(".hrgmail_not_spam").hide();
    $(".hrgmail_trash_report_spam").hide();
    $("#hrgmail_labelas .lastParmotons").hide();
    $("#checkAll").prop("checked", false);
    $(".allChecked").prop("checked", false);
    $("#checkAll").parent("label").removeClass("hrgmail_check_input");
    $(".allChecked").parent("label").removeClass("hrgmail_check_input");
}

function gmail_multi_messages_checked()
{

    var labelid = $("#labelid").val();
    if (labelid == "STARRED" || labelid == "SENT" || labelid == "DRAFT" || labelid == "ALL") {
        $(".hrgmail_move_to_inbox").show();

        if (labelid == "DRAFT")
            $(".hrgmail_discard_drafts").show();
        else
            $(".hrgmail_discard_drafts").hide();
    } else {
        $(".hrgmail_move_to_inbox").hide();
    }

    if (labelid == "SPAM" || labelid == "TRASH") {

        $(".hrgmail_delete_forever").show();
        if (labelid == "SPAM")
            $(".hrgmail_not_spam").show();
    } else {
        $(".hrgmail_delete_forever").hide();
        $(".hrgmail_not_spam").hide();
    }

    $('#hrgmail_unread').hide();
    //console.log("check length "+$(".allChecked:checked").length);
    if ($(".allChecked:checked").length > 0) {
        //labels
        $(".refresh_messages").hide();
        if (labelid == "INBOX" || labelid == "IMPORTANT" || labelid == "TRASH" || labelid == "SPAM") {
            $(".hrgmail_moveinbox_icon").show();
        } else {
            $(".hrgmail_moveinbox_icon").hide();
        }
        $(".details_icons").show();

        if (labelid == "DRAFT" || labelid == "SPAM" || labelid == "TRASH")
            $(".details_icons").hide();
        
        if (labelid == "TRASH" || labelid == "SPAM"){
            if (labelid == "TRASH")
                $(".hrgmail_trash_report_spam").show();
            
            $(".hrgmail_moveto_title").show();
            $(".hrgmail_labelas_title").show();
        }
        
    } else {
        //labels
        $(".refresh_messages").show();
        $(".details_icons").hide();
        $(".hrgmail_move_to_inbox").hide();
        $(".hrgmail_discard_drafts").hide();
        $(".hrgmail_delete_forever").hide();
        $(".hrgmail_not_spam").hide();
        $(".hrgmail_trash_report_spam").hide();
    }
    if ($(".allChecked:checked").length == $(".allChecked").length) {
        $("#checkAll").prop("checked", "checked");
        $("#checkAll").parent("label").addClass("hrgmail_check_input");
    } else {
        $("#checkAll").removeAttr("checked");
        $("#checkAll").parent("label").removeClass("hrgmail_check_input");
    }

}

function gmail_messages_details_labels_show()
{
    $(".hrgmail_pagination").hide();
    //labels
    $(".checkbox_all").hide();
    $(".refresh_messages").hide();
    $(".back_messages").show();

    var labelid = $("#labelid").val();
    if (labelid == "STARRED" || labelid == "SENT" || labelid == "DRAFT" || labelid == "ALL") {
        $(".hrgmail_move_to_inbox").show();

        if (labelid == "DRAFT")
            $(".hrgmail_discard_drafts").show();
        else
            $(".hrgmail_discard_drafts").hide();
    } else {
        $(".hrgmail_move_to_inbox").hide();
    }

    if (labelid == "SPAM" || labelid == "TRASH") {

        $(".hrgmail_delete_forever").show();
        if (labelid == "SPAM")
            $(".hrgmail_not_spam").show();
    } else {
        $(".hrgmail_delete_forever").hide();
        $(".hrgmail_not_spam").hide();
    }


    //labels
    if (labelid == "INBOX" || labelid == "IMPORTANT" || labelid == "TRASH" || labelid == "SPAM") {
        $(".hrgmail_moveinbox_icon").show();
    } else {
        $(".hrgmail_moveinbox_icon").hide();
    }
    $(".details_icons").show();

    if (labelid == "DRAFT" || labelid == "SPAM" || labelid == "TRASH")
        $(".details_icons").hide();

}

function show_accounts()
{
    console.log('show account');
    gmail_accounts = [];
    $('.hrgmail_lftBr_adedAccunts_apended ul').html('');
    api.integration.gmail.listAccounts(function (error, accounts) {
        
        if(error)
            gmailErrorHandling(error);                
        
        if(accounts.length > 0){
            console.log('show account success');
            var gmail_total_accounts = 0;
            accounts.forEach(function (account) {                                 
                
                if($(".accountRegistered").css('display') == 'none') {                   
                    setGmailBoxPosition(2);  
                }
                
                gmail_accounts[gmail_total_accounts] = account;

                if (gmail_total_accounts == 0) {
                    gmail_select_account(account);
                }

                var email = getSubStr(account.email, 15);

                $('.hrgmail_lftBr_adedAccunts_apended ul').append('<li class="switch-account ' + (gmail_total_accounts == 0 ? 'hrgmail_active' : '') + ' " data-id="' + gmail_total_accounts + '"> <span class="clearfix"> <div class="hrgmail_adedAccunts_proPic"> <img src="' + account.avatar + '" > </div> <strong>' + email + '</strong><i class="unreadCount-' + account.id + '"></i><b class="remove-account" data-id="' + account.id + '"></b></span> </li>');
                gmail_total_accounts++;
            });
        }else{            
            setGmailBoxPosition(1);            
        }
    });
}

function gmail_select_account(account)
{
    console.log('select account');
    gmail_current_account = account;

    if (gmail_current_account != undefined) {

        // Setting account title
        $('.selected-account-user-name').text(getSubStr(gmail_current_account.name, 11));
        $('.user-avatar').attr('src', gmail_current_account.avatar);

        console.log('select account success');

        // Getting custom labels        
        gmail_get_custom_labels();
        // Getting messages list
        gmail_get_messages(gmail_current_account);
        // get gmail signature
        gmail_get_signature();
    }
}

// Account param is optional
function gmail_get_messages(account)
{
    console.log('get messages');
    if (account == undefined)
        account = gmail_current_account;

    if (account == undefined)
        return false;

    console.log('get messages success');
    // Getting messages list
    gmail_preload();
    gmail_show_messages();
}

function gmail_get_custom_labels()
{
    $('.custom_labels').remove();
    $('#hrgmail_moveto .lastParmotons ul').html('');
    gmail_current_account.usersLabelsList(function (error, labels) {
            
        if(error)
            gmailErrorHandling(error);        
        
        if(labels && labels["labels"].length > 0){
           labels["labels"].forEach(function (label) {
            if (label.type == "user") {
                //console.log('labels ' + JSON.stringify(label));
                $('.hrgmail_lftBr_inbxMenue ul').append(
                        '<li class="' + label.id + ' custom_labels"><span title="' + label.name + '" data-id="' + label.id + '">' + label.name + '</span> </li>'
                        );
                $('#hrgmail_moveto .hrgmail_custom_labels ul').prepend(
                        '<li class="custom_labels"><span title="' + label.name + '" data-id="' + label.id + '">' + label.name + '</span> </li>'
                        );
                $('#hrgmail_labelas .hrgmail_custom_labels ul').prepend(
                        '<li class="custom_labels"><div class="label_checkbox"><label><input type="checkbox" value="' + label.id + '"></label></div><span title="' + label.name + '" data-id="' + label.id + '">' + label.name + '</span> </li>'
                        );
            }

        }); 
        }        

    });

    var labelid = $("#labelid").val();
    var append_html = "";
    if (labelid == "INBOX" || labelid == "IMPORTANT" || labelid == "TRASH") {
        
        if (labelid != "INBOX")
            append_html += '<li><span title="' + lang.gmailInbox + '" data-id="INBOX">' + lang.gmailInbox + '</span></li>';

        append_html += '<li><span title="' + lang.gmailSpam + '" data-id="SPAM">' + lang.gmailSpam + '</span></li>';

        if (labelid != "TRASH")
            append_html += '<li><span title="' + lang.gmailTrash + '" data-id="TRASH">' + lang.gmailTrash + '</span></li>';
    }

    $('#hrgmail_moveto .lastParmotons ul').html(append_html);
}

// message listings
function gmail_show_messages(labelIds = 'INBOX', select = 'INBOX')
{    
    console.log('show messages');
    
    $('#hrgmail_moveto').hide();
    $(".details_icons").hide();
    showError(lang.gmailLoading + ' ...', 1);
    $("#detailPage").val(0);
    $("#detailPageIds").val('');
    $('#labelid').val(labelIds);
    $('#labelidSelect').val(select);
    $(".hrgmail_mailsContent ul").html('');
    $(".refresh_messages").show();
    $(".checkbox_all").show();
    $(".hrgmail_mailsContent").show();
    $(".back_messages").hide();
    $(".hrgmail_mailsContentDetails").hide();

    var q = $("#hrgmail_search").val();

    $('.hrgmail_lftBr_inbxMenue ul li').removeClass('hrgmail_active');
    $('.hrgmail_lftBr_inbxMenue ul li.' + select).addClass('hrgmail_active');

    gmail_get_custom_labels();
    //Show total counts
    totalCounts();

    if (labelIds == 'ALL') {
        var params = {
            maxResults: maxResults,
            pageToken: nextPageToken,
            q: q
        };
    } else {
        $("#hrgmail_search").val('');
        var params = {
            labelIds: labelIds,
            maxResults: maxResults,
            pageToken: nextPageToken
        };
    }
    //console.log('params ' + JSON.stringify(params));
    gmail_current_account.usersThreadsList(params, function (error, messages)
    {
        if(error)
           gmailErrorHandling(error);      
        
        
        if(messages){
            
            console.log('saragsc test ', messages);
            
            if (messages.nextPageToken) {
                $("#lastPage").val(1);
                gmail_pagination.push({'nextPageToken': messages.nextPageToken});
                $("i.hrgmail_showMails_next").removeClass("hrgmail_disabled");
            } else {
                $("#lastPage").val(2);
                $("i.hrgmail_showMails_next").addClass("hrgmail_disabled");
            }

            //create pagination
            gmail_create_pagination();
            

            if (messages.resultSizeEstimate > 0) {

            console.log('show messages after resultSizeEstimate');
            
            var threadsGetParams = {};            
            messages["threads"].forEach(function (messageData, i) {

                //console.log( i, ' ' + messageData.snippet ) // NACHO, please do not remove it. See the console, always prints in the correct order.

                $('.hrgmail_mailsContent ul').append('<li id="gmail_li_' + messageData.id + '" ></li>');

                var important = 2;
                var starred = 2;
                var attExist = 2;
                var unread = 2;   
                var inbox_label = '';
                var to_text = '';                
                //console.log('thread detail: ' + JSON.stringify(messageData.id));

                gmail_current_account.usersThreadsGet(messageData.id, threadsGetParams, function (error, thread_messages)
                {
                    //console.log('thread detail: ' + JSON.stringify(thread_messages));
                    if ($('#oldLabelId').val() != labelIds) {
                        $('#oldLabelId').val(labelIds);
                        //$(".hrgmail_mailsContent ul").html('');
                    }
                    
                    if(error)
                        gmailErrorHandling(error);      
        
                    if(thread_messages){
                        var total_messages = thread_messages["messages"].length;
                        var total_messages_text = '';
                        var messages_ids_array = [];
                        var messages_ids = thread_messages["messages"][total_messages - 1].id;
                        var new_total_messages = 0;
                        
                        var thread_time = dateFormate(getHeader(thread_messages["messages"][total_messages - 1].payload.headers, 'Date'));
                        
                        //if (total_messages > 1) {

                            $.each(thread_messages["messages"], function () {
                                if (jQuery.inArray("TRASH", this.labelIds) == -1){
                                    new_total_messages++;
                                }
                                
                                messages_ids_array.push(this.id);
                                
                                if (jQuery.inArray("STARRED", this.labelIds) != -1)
                                    starred = 1;
                                
                                if (jQuery.inArray("UNREAD", this.labelIds) != -1)
                                    unread = 1;
                                
                                if (jQuery.inArray("IMPORTANT", this.labelIds) != -1)
                                    important = 1;
                            
                                if (jQuery.inArray("TRASH", this.labelIds) == -1){    
                                    // create message label                                 
                                    if (jQuery.inArray("SENT", this.labelIds) != -1) 
                                    {                                    

                                        if(labelIds == "SENT"){
                                           thread_time = dateFormate(getHeader(this.payload.headers, 'Date')); 
                                        }

                                        var toemails = getHeader(this.payload.headers, 'To').toString().split(",");                                    
                                        for (var i = 0; i < toemails.length; i++) {
                                            var to = toemails[i].split('@');
                                            var to_data = to[0].split('<');

                                            if(to_data[0] == ""){
                                                var to_data_split_to = to_data[1].split('@');
                                                var to_text_split = to_data_split_to[0];
                                            }else{
                                                var to_text_split = to_data[0];
                                            }

                                            to_text_split = $.trim(to_text_split);

                                            var to_label_split = to_text.toString().split(",");
                                            $.each(to_label_split, function (id, val) {
                                                to_label_split[id] = $.trim(val);
                                            });

                                            if(jQuery.inArray(to_text_split, to_label_split) == -1){                                        
                                                to_text += (to_text == "" ? to_text_split : ", "+to_text_split);                                 
                                            }

                                        }


                                        var inbox_label_split = inbox_label.toString().split(",");
                                        $.each(inbox_label_split, function (id, val) {
                                            inbox_label_split[id] = $.trim(val);
                                        });
                                        if(jQuery.inArray(lang.gmailMe, inbox_label_split) == -1){                                        
                                            inbox_label += (inbox_label == "" ? lang.gmailMe : ", "+lang.gmailMe);                                        
                                        }
                                    }else 
                                    {
                                     if(jQuery.inArray("DRAFT", this.labelIds) != -1){
                                        inbox_label += ', <span style="color:#DD4B39;">Draft</span>'; 
                                     }else{   
                                        if(labelIds != "SENT"){
                                           thread_time = dateFormate(getHeader(this.payload.headers, 'Date')); 
                                        }

                                        var to = getHeader(this.payload.headers, 'From').toString().split('@');
                                        var to_data = to[0].split('<');

                                        if(to_data[0] == ""){
                                            var to_data_split_to = to_data[1].split('@');
                                            var to_text_split = to_data_split_to[0];
                                        }else{
                                            var to_text_split = to_data[0];
                                        }

                                        to_text_split = $.trim(to_text_split);
                                        to_text = to_text_split;

                                        var inbox_label_split = inbox_label.toString().split(",");
                                        $.each(inbox_label_split, function (id, val) {
                                            inbox_label_split[id] = $.trim(val);
                                        });
                                        if(jQuery.inArray(to_text_split, inbox_label_split) == -1){
                                            inbox_label += (inbox_label == "" ? to_text_split : ", "+ to_text_split );
                                        }
                                     }
                                }
                                }
                                
                            });                                                        
                            
                            if(new_total_messages > 1)
                                total_messages_text = ' (' + new_total_messages + ')';

                            messages_ids = messages_ids_array.join(",");
                            
                            var email_message_label = ((labelIds != "DRAFT") ? (((labelIds == "SENT") ? 'To: ' + to_text : inbox_label)) + total_messages_text : '<span style="color:#DD4B39;">Draft</span>');                            
                            
                            console.log('email_message_label '+email_message_label);
                       // }

                        //check attachments
                        if (attExist == 2) 
                        {
                            $.each(thread_messages["messages"], function () {
                                if (this.payload.body.attachmentId) {
                                    attExist = 1;
                                }
                                if (this.payload.parts) {
                                    this.payload.parts.forEach(function (attachment) {
                                        if(attachment.body.attachmentId) {
                                            if(attachment.mimeType != "text/html")
                                                attExist = 1;
                                        }
                                    });
                                }
                            });
                        }

                                       
                        var message = thread_messages["messages"][total_messages - 1];                        
                        var draft = 2;
                        if (jQuery.inArray("UNREAD", message.labelIds) != -1)
                            unread = 1;                       

                        var sent = 0;
                        if (jQuery.inArray("SENT", message.labelIds) != -1)
                            sent = 1;                                                

                        if (jQuery.inArray("DRAFT", message.labelIds) != -1) {
                            draft = 1;
                            total_messages_text += ', <span>Draft</span>';
                        }                                                

                        var subject = getHeader(thread_messages["messages"][0]["payload"]["headers"], 'Subject');                        
                        
                        $('#gmail_li_' + message.threadId).attr("data-id", messages_ids);
                        $('#gmail_li_' + message.threadId).attr("data-threadid", message.threadId);
                        $('#gmail_li_' + message.threadId).attr("data-unread", unread);
                        $('#gmail_li_' + message.threadId).attr("data-important", important);
                        $('#gmail_li_' + message.threadId).attr("data-starred", starred);
                        $('#gmail_li_' + message.threadId).attr("data-draft", draft);
                        $('#gmail_li_' + message.threadId).html(
                            '<div class="hrgmail_mail clearfix ' + ((unread == 1) ? 'hrgmail_unReadMial' : 'hrgmail_readMial') + '" >\
                               <div class="hrgmail_check_mailOuter clearfix">\
                                 <div class="hrgmail_check_mail"><label class="hrgmail_allRead_drop_chckBox"><input type="checkbox" class="allChecked" name="allChecked" value="' + messages_ids + '"></label></div>\
                                 <div class="hrgmailStarred"><label class="' + ((starred == 1) ? 'select' : '') + '"><input type="checkbox"></label></div>\
                                 <div class="hrgmaillistGmail"><label class="' + ((important == 1) ? 'select' : '') + '"><input type="checkbox"></label></div>\
                                </div>\
                               <div class="hrgmail_mailList">\
                                    <label>' + email_message_label + '</label>\
                                    <p><strong>' + (subject == "" ? "(no subject)" : subject) + '</strong>&nbsp' + message.snippet + '</p>\
                                </div>\
                                <div class="ho_gmail_mailDate ' + ((unread == 1) ? 'hrgmail_unReadMialDate' : 'hrgmail_readMialDate') + '">' + (attExist == 1 ? "<a href=''></a>" : "") + '<span>' + thread_time + '</span></div>\
                             </div>'
                                   );
                        var hrgmail_mailList_Label = $('#gmail_li_' + message.threadId).find(".hrgmail_mailList label").text();
                        $('#gmail_li_' + message.threadId).find(".hrgmail_mailList label").html(hrgmail_mailList_Label);
                        //console.log('message ' + JSON.stringify(message.labelIds));
                
                    }
                });

            });

        } else {
            $(".mailsuccess").css("display", "none");
            $(".mailerror").css("display", "none");
            var no_message_html = "";
            if (labelIds == "INBOX") {
                no_message_html = lang.gmailNoNewEmail;
            } else if (labelIds == "DRAFT") {
                no_message_html = lang.gmailNoSavedDraftMsg + "<br/>" + lang.gmailSaveDraftMsg;
            } else if (labelIds == "STARRED") {
                no_message_html = lang.gmailNoStarredMessagesMsg + "<br/>" + lang.gmailToStarMsg;
            } else if (labelIds == "SENT") {
                no_message_html = lang.gmailNoSentMessages;
            } else if (labelIds == "IMPORTANT") {
                no_message_html = lang.gmailNoImportantMsg + "!";
            } else if (labelIds == "ALL") {
                if ($("#hrgmail_search").val() != "") {
                    no_message_html = lang.gmailSearchOptionsMsg;
                } else {
                    no_message_html = lang.gmailServersFeelingUnloved;
                }
            } else if (labelIds == "SPAM") {
                no_message_html = lang.gmailSpamToBeDeletedMsg;
            } else if (labelIds == "TRASH") {
                no_message_html = lang.gmailTrashToBeDeletedMsg
            } else {
                no_message_html = lang.gmailServersFeelingUnloved;
            }


            $('.hrgmail_mailsContent ul').html(
                    '<li>\
                      <div class="hrgmail_noEmail">\
                       <span>' + no_message_html + '</span>\
                      </div>\
                   </li>'
                    );
        }
        
        }
    });

    hideError();
}

function append_chatbox_methods(id)
{
    dynamic_var['editor_'+ id] = CKEDITOR.replace( 'hrgmail_message_'+id,{
            height: '235px',
          //  width: '449px',
            removePlugins: 'elementspath,magicline',
            resize_enabled: false,
            allowedContent: true,
            enterMode: CKEDITOR.ENTER_BR,
            shiftEnterMode: CKEDITOR.ENTER_BR,
            contentsCss : 'https://static.horbito.com/app/522/ckeditor.css',
            toolbar: [
                [ 'Bold','Italic','Underline','-','TextColor','BGColor','-', 'Font', 'FontSize','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock', /*'-','NumberedList','BulletedList',*/ '-','Blockquote'],
            ],
        } ); 
      


    dynamic_var['editor_'+ id].on("click", function(e){      

        console.log("Burhan single click");



            console.log('click');
            var editor_iframe = $("#cke_hrgmail_message_"+id).find("iframe").contents().find("body .hrgmail_threedot");
            var el = e.data.$.target.closest(".hrgmail_threedot");
            console.log('el ',el);
            if(el){
                editor_iframe.next("div").css('display','block');
                el.remove();
            }           
            
            refresh_compose_box(id);   
    /*          
        this.document.on("click", function(e){   
            console.log('click');
            var editor_iframe = $("#cke_hrgmail_message_"+id).find("iframe").contents().find("body .hrgmail_threedot");
            var el = e.data.$.target.closest(".hrgmail_threedot");
            console.log('el ',el);
            if(el){
                editor_iframe.next("div").css('display','block');
                el.remove();
            }           
            
            refresh_compose_box(id);   
        });
        */
    });


    
    dynamic_var['editor_'+ id].on( 'contentDom', function() {
    
        var editable = dynamic_var['editor_'+ id].editable();
        var win = this.document.getWindow();

        editable.on("click", function(e){      

            var editor_iframe = $("#cke_hrgmail_message_"+id).find("iframe").contents().find("body .hrgmail_threedot");
            var el = e.data.$.target.closest(".hrgmail_threedot");
            if(el){
                editor_iframe.next("div").css('display','block');
                el.remove();
            }           
            
            refresh_compose_box(id);   
        });

        editable.attachListener( editable.getDocument(), 'wheel', function(e) {                                      
                
            var scroll = win.getScrollPosition();   
            var scrollTop = scroll.y;   
            var delta = e.data.$.deltaY;                        
            if(delta < 0 && scrollTop == 0){
                
                var mscScrollTop = $(".hrgmail_dynamic_thread_messages").height() - 250;
                
                $('.hrgmail_scroll_content').mCustomScrollbar("scrollTo", mscScrollTop, {
                    scrollInertia: 800,
                    scrollEasing:"easeOut"
                });
            }                                    
            
        });
    });
    
    
    
    var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $("#tokenize-to-" + id).tagsInput({pattern:emailRegex, inputPadding: "50", width: "auto", height: "auto", defaultText: ""});
    $("#tokenize-cc-" + id).tagsInput({pattern:emailRegex, inputPadding: "25", width: "auto", height: "auto", defaultText: ""});
    $("#tokenize-bcc-" + id).tagsInput({pattern:emailRegex, inputPadding: "25", width: "auto", height: "auto", defaultText: ""});
    $("#hrgmail_cc_html_" + id).hide();
    $("#hrgmail_bcc_html_" + id).hide();
    $("#hrgmail_cc_" + id).click(function () {
        $("#hrgmail_cc_html_" + id).show();
        $(this).hide();
    });
    $("#hrgmail_bcc_" + id).click(function () {
        $("#hrgmail_bcc_html_" + id).show();
        $(this).hide();
    });
    $("#hrgmail_recipients_" + id).hide();
    
    if (gmail_signature != "" && id != "main_reply") {
        $("#hrgmail_message_"+id).val("<br/>---" + gmail_signature ); 
    }         
    
    $("#tokenize-to-" + id+"_tag").focus();


    dynamic_var['create_draft' + id] = true;
    dynamic_var['draft_id' + id] = "";
    dynamic_var['create_reply_draft' + id] = true;
    dynamic_var['reply_draft_id' + id] = "";
    dynamic_var['draft_md5_data' + id] = "";
    dynamic_var['create_draft_interval' + id] = '';
    dynamic_var["send_message" + id] = false;
    dynamic_var['interval_var' + id] = 1;
    
    $("#cke_hrgmail_message_"+id).find("iframe").contents().find("body .hrgmail_threedot").on('click', function () {
       console.log('bbaabbaa'); 
    });
    
    gmail_win.on("blur", "#hrgmail_subject_" + id , function ()
    {
        refresh_compose_box(id);
    });
    
    gmail_win.on("click", "#hrgmail_subject_" + id , function ()
    {
        refresh_compose_box(id);
    });
   
    gmail_win.on("keydown", "#hrgmail_subject_" + id , function ()
    {
        refresh_compose_box(id);
    });
    
    gmail_win.on("click", "#hrgmail_message_" + id , function ()
    {
        refresh_compose_box(id);
    });


    gmail_win.on("click", "#hrgmail_recipients_" + id, function ()
    {
        var cc = $("#tokenize-cc-" + id).val();
        var bcc = $("#tokenize-bcc-" + id).val();
        $("#hrgmail_cc_outer_" + id).show();
        if (cc != "")
            $("#hrgmail_cc_html_" + id).show();
        if (bcc != "")
            $("#hrgmail_bcc_html_" + id).show();
        $(this).hide();
    });

    gmail_win.on("click", "#send_draft_" + id, function ()
    {

        var compose_to = $("#tokenize-to-" + id).val();
        var cc = $("#tokenize-cc-" + id).val();
        var bcc = $("#tokenize-bcc-" + id).val();
        var subject = $("#hrgmail_subject_" + id).val();
        var message = $('#hrgmail_message_'+ id).val();

        if (compose_to != "") {
            if (subject == '' && message == '') {
                confirm(lang.gmailSendMsgWithoutSubjectMsg, function (accepted) {
                    if (accepted) {
                        clearInterval(dynamic_var['create_draft_interval' + id]);
                        dynamic_var["send_message" + id] = true;                    
                        if (id == "main_reply") {
                            if ($("#replayForwadType").val() == "reply" || $("#replayForwadType").val() == "reply_all") {
                                create_reply_draft(id);
                            } else {
                                create_draft(id);
                            }
                        } else {
                            create_draft(id);
                            showError(lang.gmailSending+' ...', 1);   
                            $("#" + id).find('.close_chatbox').click();
                        }                        
                    }
                });
            } else {                
                    clearInterval(dynamic_var['create_draft_interval' + id]);
                    dynamic_var["send_message" + id] = true;                    
                    if (id == "main_reply") {
                        if ($("#replayForwadType").val() == "reply"  || $("#replayForwadType").val() == "reply_all") {
                            create_reply_draft(id);
                        } else {
                            create_draft(id);
                        }
                    } else {
                        create_draft(id);          
                    }

                    showError(lang.gmailSending+' ...', 1);     
                    $("#" + id).find('.close_chatbox').click();                
            }
        } else {
            alert(lang.gmailSpecifyRecipientMsg);
        }
        return false;

    });

    gmail_win.on("click", "#delete_draft_" + id, function ()
    {
        gmail_remove_draft(dynamic_var["draft_id" + id]);
        
        clearInterval(dynamic_var['create_draft_interval' + id]);
        
        dynamic_var['arrayFiles' + id] = "";
        $(".hrgmail_fileName_" + id + " ul").html('');
        $("#" + id).find('.close_chatbox').click();
        if (id == "main_reply") {
            dynamic_var['create_reply_draft' + id] = true;            
            dynamic_var['interval_var' + id] = 1;
            
            gmail_remove_draft(dynamic_var["reply_draft_id" + id]);

            $(".hrgmail_click_here").show();
            $(".hrgmail_main_reply").hide();
            $("#tokenize-to-" + id).importTags('');
            $("#tokenize-cc-" + id).val('');
            $("#tokenize-bcc-" + id).val('');
            $("#hrgmail_message_" + id).val('');
            $("#hrgmail_cc_outer_" + id).show();
            $("#hrgmail_cc_html_" + id).hide();
            $("#hrgmail_bcc_html_" + id).hide();
            $("#hrgmail_recipients_" + id).hide();

        }

    });

    dynamic_var['arrayFiles' + id] = [];
    dynamic_var['arrayFilesIds' + id] = [];
    dynamic_var['arrayFilesUrls' + id] = [];

    gmail_win.on("click", ".hrgmail_attach_btn_" + id, function (e)
    {
        var options = {};
        api.fs.selectSource(options, function (error, list) {
            if(error)                
                gmailErrorHandling(error);   
            
            if(list){  
                attach_files_to_mail( list );
            }
        });
    });

    $('.wz-drop-area').on( 'wz-drop', function( e, item, list )
    {
      // list is an array of objects. Each object has an attribute fsnode
      console.log('DROP!');
      var fsnodeList = [];
      list.forEach(function( icon ){
        fsnodeList.push( icon.fsnode )
      });
      attach_files_to_mail( fsnodeList );
    });    
    
    function attach_files_to_mail( list )
    {
        list.forEach(function ( item ) {

            // DROPBOX
            if ( item.dropbox ) 
            {
                if (item.size < 5242880) {
                    var attachment = { type: 'dropbox', id: item.id, accountId: item.account, name: item.name,  size: item.size  };
                    dynamic_var['arrayFiles' + id].push(attachment);
                    gmail_append_attachment_files(id);
                } else {
                    console.warn('Not implemented, need to add link of dropbox');
                }

            // GDRIVE
            }
            else if( item.gdrive )
            {

                if (item.size < 5242880) {
                    var attachment = { type: 'gdrive', id: item.id, accountId: item.account, name: item.name,  size: item.size  };
                    dynamic_var['arrayFiles' + id].push(attachment);
                    gmail_append_attachment_files(id);
                } else {
                    console.warn('Not implemented, need to add link of gdrive');
                }

            // ONEDRIVE
            }
            else if( item.onedrive )
            {
                if (item.size < 5242880) {
                    var attachment = { type: 'onedrive', id: item.id, accountId: item.account, name: item.name,  size: item.size  };
                    dynamic_var['arrayFiles' + id].push(attachment);
                    gmail_append_attachment_files(id);
                } else {
                    console.warn('Not implemented, need to add link of onedrive');
                }

            // HORBITO
            }
            else
            {
                var fsnodeId = item;
                if(typeof item === 'object'){
                    fsnodeId = item.id;
                }
                
                api.fs(fsnodeId, function (error, fsnode) {
                    if(error){               
                        gmailErrorHandling(error);
                    }
                    
                    if(fsnode){
                        if (fsnode.size < 5242880) {
                            var attachment = { id: fsnode.id, name: fsnode.name, size: fsnode.size };
                            dynamic_var['arrayFiles' + id].push(attachment);
                            gmail_append_attachment_files(id);
                        } else {
                            confirm(lang.gmailFileGreaterMsg, function (accepted) {
                                if (accepted) {

                                    fsnode.addLink(null, true, true, function (error, link) {
                                        if (error) {
                                            console.log('add link error: ' + error);
                                            gmailErrorHandling(error);
                                        } else {
                                            $("#hrgmail_enteremail_area_" + id).find(".jqte_editor").prepend("<br/><a href='" + link.url + "'>Download " + fsnode.name + "</a><br/>");
                                            $("#hrgmail_subject_" + id).blur();
                                            //console.log('add link : '+ JSON.stringify(link));
                                            //dynamic_var['arrayFiles' + id].push({ name : fsnode.name, url : link.url, size : fsnode.size });
                                            //gmail_append_attachment_files(id);
                                        }
                                    });
                                }
                            });
                        }


                    }
                });

            }
        });
    }

    gmail_win.on("click", ".hrgmail_fileName_" + id + " ul li .remove-attachment", function () {
        var index = $(this).data('index');
        var removeType = $(this).data('removeType');

        gmail_remove_attachment_file(id, index, removeType);
    });


    gmail_win.on("keydown", "#tokenize-to-" + id + "_tag", function (e) 
    {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 9) {
            e.preventDefault();
            if ($("#hrgmail_cc_html_" + id).css('display') == 'none') {                
                $("#hrgmail_subject_" + id).focus();
                
                setTimeout(function () { $("#hrgmail_subject_"+id).click(); }, 100);                
            } else {
                $("#tokenize-cc-" + id + "_tag").focus();
            }
            
            
        }
    });

}

function refresh_compose_box(id)
{

    if (id == "main_reply") {
        if ($("#replayForwadType").val() == "reply" || $("#replayForwadType").val() == "reply_all") {
            if(dynamic_var['interval_var' + id] == 1){                     
                dynamic_var['create_draft_interval' + id] = setInterval(create_reply_draft, 5000, id);
            }
        } else {
            if(dynamic_var['interval_var' + id] == 1){
                dynamic_var['create_draft_interval' + id] = setInterval(create_draft, 5000, id);
            }
        }
    } else {
        if(dynamic_var['interval_var' + id] == 1){
            dynamic_var['create_draft_interval' + id] = setInterval(create_draft, 5000, id);
        }            
    }

    dynamic_var['interval_var' + id] = 2;

    var compose_to = $("#tokenize-to-" + id).val();
    var cc = $("#tokenize-cc-" + id).val();
    var bcc = $("#tokenize-bcc-" + id).val();
    var total_emails = "";
    var compose_msg = "";
    if (compose_to != "") {
        if (total_emails == "")
            total_emails += compose_to;
        else
            total_emails += "," + compose_to;
    }
    if (cc == "") {
        $("#hrgmail_cc_html_" + id).hide();
        $("#hrgmail_cc_" + id).show();
    } else {
        if (total_emails == "")
            total_emails += cc;
        else
            total_emails += "," + cc;
    }
    if (bcc == "") {
        $("#hrgmail_bcc_html_" + id).hide();
        $("#hrgmail_bcc_" + id).show();
    } else {
        if (total_emails == "")
            total_emails += bcc;
        else
            total_emails += "," + bcc;
    }
    if (total_emails != "") {
        var emails = total_emails.toString().split(",");
        for (var i = 0; i < emails.length; i++) {
            compose_msg += emails[i];
            if (emails.length > 1)
                compose_msg += " <button>" + (emails.length - 1) + " more";
            if (bcc != "" && bcc.toString().split(",").length > 0) {
                compose_msg += " (" + bcc.toString().split(",").length + " Bcc)</button>";
            } else {
                compose_msg += "</button>";
            }
            $("#hrgmail_cc_outer_" + id).hide();
            $("#hrgmail_cc_html_" + id).hide();
            $("#hrgmail_bcc_html_" + id).hide();
            $("#hrgmail_recipients_" + id).show();
            $("#hrgmail_recipients_" + id + " span").html(compose_msg);
            return false;
        }
    } else {
        $("#hrgmail_cc_outer_" + id).hide();
        $("#hrgmail_recipients_" + id).show();
        $("#hrgmail_recipients_" + id + " span").text("Recipients");
    }
}

function gmail_changes_reload()
{
    if ($("#detailPage").val() != 1) {
        nextPageToken = '';
        gmail_pagination = [];
        grmail_refresh_messages();
    }  
}

// refresh and reload messages
function grmail_refresh_messages()
{
    var labelIds = $('#labelid').val();
    var labelidSelect = $('#labelidSelect').val();
    gmail_show_messages(labelIds, labelidSelect);
}

// get signature
function gmail_get_signature() 
{

    gmail_current_account.usersSettingsSendAsList(function (error, settings) {
        
        if(error)
            gmailErrorHandling(error);      

        if(settings){
            gmail_signature = settings["sendAs"][0]["signature"];
        }
    });

}

// create and update draft
function create_draft(boxId)
{    
    var md5_data = "";
    var compose_to = $("#tokenize-to-" + boxId).val();
    var cc = $("#tokenize-cc-" + boxId).val();
    var bcc = $("#tokenize-bcc-" + boxId).val();
    var subject = $("#hrgmail_subject_" + boxId).val();
    var message = dynamic_var['editor_' + boxId].getData();    

    // Removing three dots ... otherwise it will be sent within message
    message = message.replace(three_dots_html, "");

    if (compose_to == "" && cc == "" && bcc == "" && subject == "" && message == "" && dynamic_var['arrayFilesIds' + boxId] == "") {

    } else {       

        var createParam = {
            from: gmail_current_account.name + ' <' + gmail_current_account.email + '>',
            to: compose_to.toString().split(","),
            cc: cc.toString().split(","),
            bcc: bcc.toString().split(","),
            subject: subject,
            html: message,
            attachments: dynamic_var['arrayFiles' + boxId]
            //urlAttachments :dynamic_var['arrayFilesUrls' + boxId]
        };        
        
        //create draft        
        if (dynamic_var["create_draft" + boxId]) {            
            
            gmail_current_account.usersDraftCreate(createParam, null, function (error, drafts) {
                if(error){
                    console.log('create draft error ', error);
                    gmailErrorHandling(error);      
                }
                
                if(drafts){
                    $('#saving_text_' + boxId).text(lang.gmailSaving);
                    console.log('Draft Data ' + JSON.stringify(drafts));                    
                    dynamic_var["draft_id" + boxId] = drafts.id;
                    dynamic_var["draft_md5_data" + boxId] = md5(JSON.stringify(createParam));
                    dynamic_var["create_draft" + boxId] = false;                    
                    $("#" + boxId).addClass(drafts.id);
                    
                    setTimeout(function () { $('#saving_text_' + boxId).text(lang.gmailSaved); }, 2000);
                    setTimeout(function () { $('#saving_text_' + boxId).text(''); }, 4000);
                    
                    if (dynamic_var["send_message" + boxId]) {                  
                        gmail_send_draft_message(boxId);
                    }
                }else{
                        $('#saving_text_' + boxId).text('');
                    }
            });
            
        } else {
            //console.log(dynamic_var["draft_md5_data" + boxId] +'=='+ md5(JSON.stringify(createParam)));
            //update draft                   
            if (dynamic_var["draft_md5_data" + boxId] != md5(JSON.stringify(createParam)) || dynamic_var["send_message" + boxId])
            {                    
                
                gmail_current_account.usersDraftUpdate(createParam, dynamic_var["draft_id" + boxId], null, function (error, draft) {
                    if(error)
                        gmailErrorHandling(error);      

                    if(draft){
                        $('#saving_text_' + boxId).text(lang.gmailSaving);
                        console.log('Updated Draft Data ' + JSON.stringify(draft));
                        dynamic_var["draft_md5_data" + boxId] = md5(JSON.stringify(createParam));
                        
                        setTimeout(function () { $('#saving_text_' + boxId).text(lang.gmailSaved); }, 2000);
                        setTimeout(function () { $('#saving_text_' + boxId).text(''); }, 4000);

                        if (dynamic_var["send_message" + boxId]) {
                            gmail_send_draft_message(boxId);
                        }
                    }else{
                        $('#saving_text_' + boxId).text('');
                    }
                });
                
                
            }
        }
    }
}

// create and update reply draft
function create_reply_draft(boxId)
{
    var compose_to = $("#tokenize-to-" + boxId).val();
    var cc = $("#tokenize-cc-" + boxId).val();
    var bcc = $("#tokenize-bcc-" + boxId).val();
    var subject = $("#hrgmail_subject_" + boxId).val();
    var message = dynamic_var['editor_' + boxId].getData(); 
    
    // Removing three dots ... otherwise it will be sent within message
    message = message.replace(three_dots_html, "");  
    // Removing hrgmail_reply_content style and hrgmail_threedot class
    message = message.replace("display:none;", "");  
      
    if (compose_to == "" && cc == "" && bcc == "" && subject == "" && message == "") {
    } else {
        var createParam = {
            to: compose_to.toString().split(","),
            cc: cc.toString().split(","),
            bcc: bcc.toString().split(","),
            subject: subject,
            inReplyTo: $('#hrgmail_message_id_' + boxId).val(),
            html: message,
            attachments: dynamic_var['arrayFiles' + boxId],
            //attachments: dynamic_var['arrayFilesIds' + boxId],
            //urlAttachments :dynamic_var['arrayFilesUrls' + boxId]
        };
        //console.log("createParam " + createParam);
        var thread_id = $("#openThreadId").val();
        
        //create draft
        if (dynamic_var["create_reply_draft" + boxId]) {                        
            
            gmail_current_account.usersDraftCreate(createParam, thread_id, function (error, drafts) {
                if(error){
                    console.log('create draft error' + error);
                    gmailErrorHandling(error);
                }
                              

                if(drafts){
                    $('#saving_text_' + boxId).text(lang.gmailSaving);
                    console.log('Replay Draft Data ' + JSON.stringify(drafts));
                    dynamic_var["reply_draft_id" + boxId] = drafts.id;                                      
                    dynamic_var["create_reply_draft" + boxId] = false;
                    dynamic_var["draft_md5_data" + boxId] = md5(JSON.stringify(createParam));
                    
                    setTimeout(function () { $('#saving_text_' + boxId).text(lang.gmailSaved); }, 2000);
                    
                    if (dynamic_var["send_message" + boxId]) {
                        gmail_send_draft_message(boxId);
                    }
                }
            });
            
            setTimeout(function () { $('#saving_text_' + boxId).text(''); }, 4000);
        } else {
            //update draft              
            if (dynamic_var["draft_md5_data" + boxId] != md5(JSON.stringify(createParam))  || dynamic_var["send_message" + boxId])
            {         
                
                gmail_current_account.usersDraftUpdate(createParam, dynamic_var["reply_draft_id" + boxId], thread_id, function (error, draft) {
                    if(error)
                        gmailErrorHandling(error);      

                    if(draft){
                        $('#saving_text_' + boxId).text(lang.gmailSaving);
                        console.log('Updated reply Draft Data ' + JSON.stringify(draft));
                        dynamic_var["draft_md5_data" + boxId] = md5(JSON.stringify(createParam));                                

                        setTimeout(function () { $('#saving_text_' + boxId).text(lang.gmailSaved); }, 2000);

                        if (dynamic_var["send_message" + boxId]) {
                            gmail_send_draft_message(boxId);
                        }
                    }
                });

            setTimeout(function () { $('#saving_text_' + boxId).text(''); }, 4000);

            }else{
               if (dynamic_var["send_message" + boxId]) {
                    gmail_send_draft_message(boxId);
                } 
            }            
        }


    }
}

//create_draft_compose_box
function create_draft_compose_box(threadId)
{
    var draftsGetParams = {};
    gmail_current_account.usersDraftList(draftsGetParams, function (error, draft_messages)
    {
        if(error)
            gmailErrorHandling(error);      

        if(draft_messages && draft_messages["drafts"].length > 0){
            //console.log('Drafts Data: ' + JSON.stringify(draft_messages["drafts"]));
            draft_messages["drafts"].forEach(function (draft)
            {
            if (threadId == draft.message.threadId) {
                var draftId = draft.id;
                gmail_current_account.usersDraftGet(draftId, function (error, draft_data)
                {
                    if(error)
                        gmailErrorHandling(error);      

                    if(draft_data){

                        if ($("#chatbox-html").find(".chatbox-html").hasClass(draftId))
                        {
                            $("#chatbox-html").find("." + draftId).css("display", "block");
                            $("#chatbox-html").find("." + draftId).find(".maximize_chatbox").click();
                            return;
                        }

                        //console.log('Drafts data:  ' + JSON.stringify(draft_data));

                        $('#compose-button').click();
                        var boxId = $("#chatbox-html").find(".chatbox-html:last-child").attr("id");
                        var to_value = getHeader(draft_data.message.payload.headers, 'To');
                        if (to_value != "") {
                            var to_emails = to_value.toString().split(',');
                            to_emails.forEach(function (to_email) {
                                $("#tokenize-to-" + boxId).addTag(to_email);
                            });
                        }
                        var cc_value = getHeader(draft_data.message.payload.headers, 'Cc');
                        if (cc_value != "") {
                            var cc_emails = cc_value.toString().split(',');
                            cc_emails.forEach(function (to_email) {
                                $("#tokenize-cc-" + boxId).addTag(to_email);
                            });
                        }
                        var bcc_value = getHeader(draft_data.message.payload.headers, 'Bcc');
                        if (bcc_value != "") {
                            var bcc_emails = bcc_value.toString().split(',');
                            bcc_emails.forEach(function (to_email) {
                                $("#tokenize-bcc-" + boxId).addTag(to_email);
                            });
                        }
                        $("#hrgmail_subject_" + boxId).val(getHeader(draft_data.message.payload.headers, 'Subject'));
                        
                        
                        $("#hrgmail_enteremail_area_" + boxId).find(".jqte_editor").html(getBody(draft_data.message.payload));

                        $("#" + boxId).addClass(draftId);
                        dynamic_var["draft_id" + boxId] = draftId;
                        dynamic_var["create_draft" + boxId] = false;

                        $("#hrgmail_subject_" + boxId).blur();
                    }    
                });

            }
        });
        }

    });



}

//create_reply_draft_compose_box
function create_reply_draft_compose_box(threadId)
{
    $(".hrgmail_dynamic_thread_messages .hrgmail_readmailMessages:last .hrgmail_readmailTitle_profile").click();

    var draftsGetParams = {};
    gmail_current_account.usersDraftList(draftsGetParams, function (error, draft_messages)
    {
        if(error)
            gmailErrorHandling(error);      

        if(draft_messages && draft_messages["drafts"].length > 0){

            //console.log('Drafts Data: ' + JSON.stringify(draft_messages["drafts"]));
            draft_messages["drafts"].forEach(function (draft)
            {
            if (threadId == draft.message.threadId) {
                var draftId = draft.id;
                gmail_current_account.usersDraftGet(draftId, function (error, draft_data)
                {
                    if(error)
                        gmailErrorHandling(error);      

                    if(draft_data){
                        $(".hrgmail_click_here").hide();
                        $(".hrgmail_main_reply").show();
                        $("#replayForwadType").val('reply');

                        if (main_append == 0) {
                            /// compose box for main replay
                            append_chatbox_methods('main_reply');
                            /// compose box for main replay end
                            main_append = 1;
                        }

                        var boxId = "main_reply";                        
            
                        var to_value = getHeader(draft_data.message.payload.headers, 'To');
                        if (to_value != "") {
                            var to_emails = to_value.toString().split(',');
                            to_emails.forEach(function (to_email) {
                                $("#tokenize-to-" + boxId).addTag(to_email);
                            });
                        }
                        var cc_value = getHeader(draft_data.message.payload.headers, 'Cc');
                        if (cc_value != "") {
                            var cc_emails = cc_value.toString().split(',');
                            cc_emails.forEach(function (to_email) {
                                $("#tokenize-cc-" + boxId).addTag(to_email);
                            });
                        }
                        var bcc_value = getHeader(draft_data.message.payload.headers, 'Bcc');
                        if (bcc_value != "") {
                            var bcc_emails = bcc_value.toString().split(',');
                            bcc_emails.forEach(function (to_email) {
                                $("#tokenize-bcc-" + boxId).addTag(to_email);
                            });
                        }
                        
                        $("#" + boxId).addClass(draftId);
                        dynamic_var["reply_draft_id" + boxId] = draftId;
                        dynamic_var["create_reply_draft" + boxId] = false;
                        
                        // append message content in texteditor
                        getBody(draft_data.message)
                        .done(function(message,iframe_html) {
                            $("#hrgmail_message_main_reply").val("<br/>---" + gmail_signature );
                            //dynamic_var['quill_main_reply'].focus();
                        });
                    }
                });

            }
        });
        }

    });



}

// send draft
function gmail_send_draft_message(boxId)
{        
        if (dynamic_var["draft_id" + boxId] || dynamic_var["reply_draft_id" + boxId])
        {                       
            var draft_id = dynamic_var["draft_id" + boxId];
            if (boxId == "main_reply") {
                if ($("#replayForwadType").val() == "reply" || $("#replayForwadType").val() == "reply_all") {
                    draft_id = dynamic_var["reply_draft_id" + boxId];
                }
            }
                        
            gmail_current_account.usersDraftSend(draft_id, function (error, draft)
            {
                $(".mailsuccess").css("display", "none");
                
                if(error){
                    console.log('Draft not sent' + JSON.stringify(error));
                    if (boxId != "main_reply")
                        $("#" + boxId).css("display", "block");
                    
                        //gmailErrorHandling(error);      
                }        
                
                if(draft){                
                    console.log('Draft send Data ' + JSON.stringify(draft));
                    gmail_show_message(lang.gmailMsgSent, lang.gmailMessageSentMsg);
                    clearInterval(dynamic_var['create_draft_interval' + boxId]);                    
                    dynamic_var['create_draft' + boxId] = true;
                    $("#" + boxId).find('.close_chatbox').click();
                    if (boxId == "main_reply") {
                        gmail_append_reply_message(draft.id);
                        dynamic_var["create_reply_draft" + boxId] = true;                    
                        $(".hrgmail_click_here").show();
                        $(".hrgmail_main_reply").hide();
                        $("#tokenize-cc-" + boxId).val('');
                        $("#tokenize-bcc-" + boxId).val('');
                        $("#hrgmail_message_" + boxId).val('');
                        $("#hrgmail_cc_outer_" + boxId).show();
                        $("#hrgmail_cc_html_" + boxId).hide();
                        $("#hrgmail_bcc_html_" + boxId).hide();
                        $("#hrgmail_recipients_" + boxId).hide();
                    }

                    if ($('#labelid').val() == "SENT" || $('#labelid').val() == "DRAFT")
                        grmail_refresh_messages();
                }
                
                
            });
        } else {
            alert("Draft not created");
        }
}

// gmail modified labels
function gmail_modified_labels(addLabelsVal, removeLabelsVal)
{
    if ($("#detailPage").val() == 1) {
        var allVals = $("#detailPageIds").val();
    } else {
        var allVals = $("input[name=allChecked]:checked").map(function () {
            return this.value;
        }).get();
    }

    if (allVals != "") {
        var ids = allVals.toString().split(',');
        if (addLabelsVal != '')
            addLabels(ids, addLabelsVal);

        if (removeLabelsVal != '')
            removeLabels(ids, removeLabelsVal);
        
//        console.log('gmail_pagination '+ JSON.stringify(gmail_pagination) );
//        return;
    
        var total_array_length = gmail_pagination.length;
        gmail_pagination.splice(total_array_length - 1, 1);

        if (total_array_length > 1) {
            nextPageToken = gmail_pagination[gmail_pagination.length-1].nextPageToken;
        } else {
            nextPageToken = '';
        }
        
        gmail_postload();
        grmail_refresh_messages();
    } else {
        alert(lang.gmailNoConSelectedMsg);
        return false;
    }

}

// gmail delete draft
function gmail_delete_draft()
{
    var draft_msg_flag = 0;
    if ($("#detailPage").val() == 1) {
        var allVals = $("#detailPageIds").val();
    } else {
        var allVals = $("input[name=allChecked]:checked").map(function () {
            return this.value;
        }).get();
    }

    var ids = allVals.toString().split(',');

    ids.forEach(function (draftId) {

        var draftsGetParams = {};
        gmail_current_account.usersDraftList(draftsGetParams, function (error, draft_messages)
        {
            if(error)
                gmailErrorHandling(error);      
                    
                
            if(draft_messages && draft_messages["drafts"].length > 0){
                draft_messages["drafts"].forEach(function (draft)
                {
                    if (draft.message.id == draftId) {
                        gmail_current_account.usersDraftDelete(draft.id, function (error, draft) {
                            if(error)
                                gmailErrorHandling(error);      

                            if(draft){
                                if (draft_msg_flag == 0) {
                                    gmail_show_message(lang.gmailDeletedMsg, lang.gmailDraftDeleteMsg);
                                    draft_msg_flag = 1;
                                }
                            }
                        });
                    }
                });
            }
        });

    });
    gmail_postload();
    grmail_refresh_messages();
}

// gmail delete messages
function gmail_delete_messages()
{
    if ($("#detailPage").val() == 1) {
        var allVals = $("#detailPageIds").val();
    } else {
        var allVals = $("input[name=allChecked]:checked").map(function () {
            return this.value;
        }).get();
    }
    var messageIds = allVals.toString().split(',');

    var deleteParams = {"ids": messageIds}
    console.log('deleteParams: ' + JSON.stringify(deleteParams));
    gmail_current_account.usersMessagesBatchDelete(deleteParams, function (error, message) {
        if(error)
            gmailErrorHandling(error);      
                    
        if(message){
            console.log('remove message: ' + JSON.stringify(message));
        }
    });


    gmail_postload();
    grmail_refresh_messages();
}

var main_append = 0;
function gmail_reply_forward_chatbox_append(id, type)
{    
    if(type == 'delete') {
        if (id > 1) {
            showError(lang.gmailLoading + ' ...', 1);
            var message_id = $(".hrgmail_dynamic_thread_message_" + id + " .hrgmail_reply_forward_options_list ul").data("messageid");
            addLabels([message_id], ["TRASH"]);
            $(".hrgmail_dynamic_thread_message_" + id).remove();
            hideError();
        } else {
            $("#hrgmail-remove-button").click();
        }

    } else if (type == 'unread') {
        gmail_modified_labels(["UNREAD"], "");
    } else{
        
     var el_iframe_content =  $(".hrgmail_dynamic_thread_message_" + id + " .hrgmail_message_contents").find("iframe").contents();     
    var message_html = el_iframe_content.find(".iframe-content").html();
    
    message_html = message_html.replace('<div class="gmail_extra" style="display: none;">', '<div class="gmail_extra">');
    message_html = message_html.replace(three_dots_html, "");
        
    var reply_append_text = $("#hrgmail_append_reply_text_main_reply").val();
    var reply_forward_text = $("#hrgmail_append_forward_text_main_reply").val();
    $(".hrgmail_click_here").hide();
    $(".hrgmail_main_reply").show();
   
    //var textarea = $("#hrgmail_enteremail_area_main_reply").find(".jqte_editor");

    if (main_append == 0) {
        /// compose box for main replay
        append_chatbox_methods('main_reply');
        /// compose box for main replay end
        main_append = 1;
    }
    
    // Scroll down
    $('.hrgmail_scroll_content').mCustomScrollbar("scrollTo", "bottom", {
        timeout: 30,
        scrollInertia: 0
    });
    
    //message_html = message_html.replace(three_dots_html, "");
    if (type == 'reply' || type == 'reply_all') {
        $("#replayForwadType").val(type);
        $('#tokenize-to-main_reply').importTags('');
        if (type == 'reply') {
            var to_data_split = $('.hrgmail_dynamic_thread_message_'+ id +' .reply_to_emails').val().split(',');  
        }else{
            var to_data_split = $('.hrgmail_dynamic_thread_message_'+ id +' .reply_to_all_emails').val().split(','); 
        }
         
        to_data_split.forEach(function (to_email_data) {   
           var to_email_data_split = to_email_data.split('<');

           if(to_email_data_split.length > 1){
               var to_orignal_email = to_email_data_split[1].replace('>','');
           }else{
               var to_orignal_email = to_email_data_split;
           }
           
           if($.trim(to_orignal_email) != gmail_current_account.email){   
               console.log(to_orignal_email + ' != ' + gmail_current_account.email);
               $('#tokenize-to-main_reply').addTag(to_email_data);
           } 
        }); 
        
       var append_html = "<br/><br/>" + three_dots_html + "<div style='display:none;' class='hrgmail_reply_content'><div class='gmail_extra'><br/>" +  reply_append_text + "<br/><blockquote>" + message_html + "</blockquote><br/>" + gmail_signature + "</div></div>";

    } else if (type == 'forward') {
        $("#replayForwadType").val(type);
        $('#tokenize-to-main_reply').importTags('');
        
       var append_html = "<br/>" + reply_forward_text + "<br/><br/>" + message_html+"<br/>" + gmail_signature;
              
       
//       var all_attachments = $(".hrgmail_dynamic_thread_message_" + id + " .hrgmail_attachmail .hrgmail_attachmailInner");
//      //  var to_attachments = attachments_el.find(".hrgmail_attachmailInner").length;
//        
//        all_attachments.each(function(index) {
//            var attachment_el = $(this).find(".hrGmailsaveDriveMain"); 
//            
//            var attachmentId = attachment_el.data("attachment_id");
//            var messageId = attachment_el.data("message_id");
//            var filename = attachment_el.data("filename");
//            
//            var attachment = { id: attachmentId, name: filename, size: 7451 };
//            dynamic_var['arrayFilesmain_reply'].push(attachment);
//            //gmail_append_attachment_files('main_reply');
//            
//            gmail_current_account.getAttachment(messageId, attachmentId, function(error, attachment) {
//                if(error)
//                     gmailErrorHandling(error); 
//                   
////                 attachment111 = attachment.data.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
////                 var attachmentData = decodeURIComponent(escape(atob(attachment111)));
//                 console.log('attachment '+ JSON.stringify(attachment));               
//             });
//            
//             
//        });
        
    }
    

    if(type == 'reply'){
       dynamic_var['editor_main_reply'].setData(append_html, function() {
            dynamic_var['editor_main_reply'].focus();
        }); 
    }else{
        dynamic_var['editor_main_reply'].setData(append_html);
        
        $(".hrgmail_recipients").click();
        $("#tokenize-to-main_reply_tag").focus();
    }
                       

    refresh_compose_box('main_reply');
    
    }
}

function gmail_create_pagination()
{
    console.log('create pagination');
    
    $("i.hrgmail_showMails_prev").addClass("hrgmail_disabled");
    if (gmail_pagination.length == 1)
    {
        nextPageToken = gmail_pagination[0].nextPageToken;

        if ($("#lastPage").val() == 2) {
            $("i.hrgmail_showMails_prev").removeClass("hrgmail_disabled");
            nextPageToken = "";
        }

    } else if (gmail_pagination.length > 1)
    {
        $("i.hrgmail_showMails_prev").removeClass("hrgmail_disabled");
        nextPageToken = gmail_pagination[gmail_pagination.length - 1].nextPageToken;
    }
    
    var q = $("#hrgmail_search").val();
    
    if(q == ""){

        var labelid = $("#labelid").val();
        if (labelid == "ALL") {

        gmail_current_account.usersGetProfile(function (error, data) {            
            if(error)
                gmailErrorHandling(error);      
                    
            if(data){                
                if (data.threadsTotal > 0) {
                    console.log('create pagination success');
                    var fromPaginate = parseInt($("#fromPaginate").val()) + 1;
                    var toPaginate = $("#toPaginate").val();
                    
                    $(".hrgmail_main_pagination").html("<strong>" + fromPaginate + "-" + ((toPaginate < data.threadsTotal) ? toPaginate : data.threadsTotal) + "</strong> " + lang.gmailOf + " <strong>" + data.threadsTotal + "</strong>");
                }
            }
        });

    } else {

        gmail_current_account.usersLabelsGet(labelid, function (error, data) {
            if(error)
                gmailErrorHandling(error);      
                    
            if(data){                
                if (data.threadsTotal > 0) {
                    console.log('create pagination success');
                    var fromPaginate = parseInt($("#fromPaginate").val()) + 1;
                    var toPaginate = $("#toPaginate").val();

                    $(".hrgmail_main_pagination").html("<strong>" + fromPaginate + "-" + ((toPaginate < data.threadsTotal) ? toPaginate : data.threadsTotal) + "</strong> " + lang.gmailOf + " <strong>" + data.threadsTotal + "</strong>");
                }
            }
        });
    }
    }else{
       
        var params = { q: q };       

        gmail_current_account.usersThreadsList(params, function (error, messages)
        {

           var fromPaginate = parseInt($("#fromPaginate").val()) + 1;
           var toPaginate = $("#toPaginate").val();

           $(".hrgmail_main_pagination").html("<strong>" + fromPaginate + "-" + ((toPaginate < messages["threads"].length) ? toPaginate : messages["threads"].length) + "</strong> " + lang.gmailOf + " <strong>" + messages["threads"].length + "</strong>");
        });
    }
}

function gmail_append_reply_message(messageId)
{

    gmail_current_account.usersMessageGet(messageId, function (error, message)
    {
        if(error)
            gmailErrorHandling(error);      
                    
        if(message){
            console.log('reply message : ' + JSON.stringify(message));

            var count = $(".hrgmail_dynamic_thread_messages div.hrgmail_readmailMessages").length + 1;
            $("#detailPageIds").val($("#detailPageIds").val() + "," + message.id);
            var append_reply_text = 'On ' + gmail_full_date_formate(getHeader(message.payload.headers, 'Date')) + ', ' + htmlEntities(getHeader(message.payload.headers, 'From')) + ' wrote:';
            var append_forward_text = "---------- Forwarded message ---------- <br/> From: " + htmlEntities(getHeader(message.payload.headers, 'From')) + " <br/>Date: " + gmail_full_date_formate(getHeader(message.payload.headers, "Date")) + " <br/>Subject: " + getHeader(message.payload.headers, 'Subject') + " <br/>To: " + htmlEntities(getHeader(message.payload.headers, 'To'));
            $("#hrgmail_message_id_main_reply").val(getHeader(message.payload.headers, 'Message-ID'));
            $("#hrgmail_append_reply_text_main_reply").val(append_reply_text);
            $("#hrgmail_append_forward_text_main_reply").val(append_forward_text);

            var sent = 0;
            if (getHeader(message.payload.headers, 'Reply-To') != "") {
                var getImageEmail = getHeader(message.payload.headers, 'Reply-To');
            } else {
                var getImageEmailText = getHeader(message.payload.headers, 'Return-Path');
                var getImageEmail = getImageEmailText.replace('<', '').replace('>', '');
            }

            var to_me_text = 'me';
            var reply_to_all_emails = getHeader(message.payload.headers, 'From') + ', ' + getHeader(message.payload.headers, 'To')+ ', ' + getHeader(message.payload.headers, 'Cc');
            if (jQuery.inArray("SENT", message.labelIds) != -1) {
                sent = 1;
                getImageEmail = getHeader(message.payload.headers, 'Delivered-To');
                var reply_to_emails = getHeader(message.payload.headers, 'To')+ ', ' + getHeader(message.payload.headers, 'Cc');
            }else{
                var to_data_split = getHeader(message.payload.headers, 'To').split(',');  
                to_data_split.forEach(function (to_email_data) {   
                   var to_email_data_split = to_email_data.split('<');
                   if(to_email_data_split.length>1){
                    var to_orignal_email = to_email_data_split[1].replace('>',''); 
                    if(to_orignal_email != gmail_current_account.email){                       
                            to_me_text += ', ' + to_email_data;
                        } 
                   }else{
                       if(to_email_data != gmail_current_account.email){                       
                            to_me_text += ', ' + to_email_data;
                        } 
                   }
                }); 
                
                if(getHeader(message.payload.headers, 'Cc') != ""){
                    var cc_data_split = getHeader(message.payload.headers, 'Cc').split(',');  
                    cc_data_split.forEach(function (cc_email_data) {   
                       var cc_email_data_split = cc_email_data.split('<');
                       if(cc_email_data_split.length>1){
                        var cc_orignal_email = cc_email_data_split[1].replace('>',''); 
                        if(cc_orignal_email != gmail_current_account.email){                       
                                to_me_text += ', ' + cc_email_data;
                            } 
                       }else{
                           if(cc_email_data != gmail_current_account.email){                       
                                to_me_text += ', ' + cc_email_data;
                            } 
                       }
                    }); 
                }
                var reply_to_emails = getHeader(message.payload.headers, 'From');
            }
            
            var reply_all_count = 0;
            if(getHeader(message.payload.headers, 'Cc') == ''){
                var to_split = getHeader(message.payload.headers, 'To').split(',');
                console.log('to_split '+to_split.length);
                reply_all_count = to_split.length;
            }else{
                var to_cc_data = getHeader(message.payload.headers, 'To') +', '+ getHeader(message.payload.headers, 'Cc');
                var to_cc_split = to_cc_data.split(',');
                console.log('to_cc_split '+to_cc_split.length);
                reply_all_count = to_cc_split.length;
            }
            
            //starred
            var starred = 0;
            if (jQuery.inArray("STARRED", message.labelIds) != -1)
                starred = 1;

            var unread = 0;
            if (jQuery.inArray("UNREAD", message.labelIds) != -1)
                unread = 1;

            var to_at = getHeader(message.payload.headers, 'To').toString().split('@');
            var to = to_at[0].toString().split('<');
            //messages contents 
            $(".hrgmail_dynamic_thread_messages").append(
                    '<div class="hrgmail_dynamic_thread_message_' + count + ' hrgmail_readmailMessages">\
                      <input type="hidden" class="reply_to_emails" value="'+ reply_to_emails +'">\
                      <input type="hidden" class="reply_to_all_emails" value="'+ reply_to_all_emails +'">\
                      <div class="hrgmail_readmailTitle_profile clearfix">\
                        <div class="hrgmail_usrProfile clearfix">\
                            <div class="hrgmail_usrProfilePic"> <img src="//ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png"> </div>\
                            <div class="hrgmail_usrProfileName clearfix"> <span></span><br/>\
                                <div class="hrgmailuserdetail">\
                                    <b>' + lang.gmailToSmall + ' ' + ((sent == 1) ? getHeader(message.payload.headers, 'To').replace(' <','<') : to_me_text) + '</b>\
                                    <p class="display_none">' + getSubStr(message.snippet, 75) + '</p>\
                                    <div class="hrgmailmailerInfo clearfix" style="display: none;">\
                                        <div class="hrgmailmailerInfoInner clearfix">\
                                            <ul><li></li></ul>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                        <div class="hrgmail_hdr_formatBar_right">\
                            <ul>\
                                <li><div class="hrgmail_mailsOut_ofNo"> <strong class="hrgmail_date">' + dateFormate(getHeader(message.payload.headers, 'Date')) + '</strong> </div></li>\
                                <li><div class="hrgmail_mailsOut_ofNo"> <div class="hrgmailstarredInner"><label class="' + ((starred == 1) ? 'select' : '') + '"><input type="checkbox" value="' + message.id + '"></label></div> </div></li>\
                                <li class="hrgmail_reply_forward_options">\
                                  <div class="hrgmail_reply_forward_btnType hrgmail_show_reply_forward">\
                                    <span class="hrgmail_replybtn"><i></i></span>\
                                    <span class="hrgmail_hdr_srchDropDown"><i></i></span>\
                                    </div>\
                                </li>\
                            </ul>\
                        </div>\
                        <div class="hrgmail_reply_forward_options_list">\
                            <ul data-id="' + count + '" data-messageid="' + message.id + '" data-headermessageid="' + getHeader(message.payload.headers, 'Message-ID') + '"  >\
                                <div class="appendreplytext display_none">' + append_reply_text + '</div>\
                                <div class="appendforwardtext display_none">' + append_forward_text + '</div>\
                                <li data-id="reply"><div class="hrgmail_reply_option_li"></div>' + lang.gmailReply + '</li>\
                                '+ ((reply_all_count>1) ? '<li data-id="reply_all"><div class="hrgmail_reply_option_li"></div>' + lang.gmailReplyToAll + '</li>' : '') +'\
                                <li data-id="forward"><div class="hrgmail_forward_option_li"></div>' + lang.gmailForward + '</li>\
                                <li data-id="delete">' + lang.gmailDeleteMsg + '</li>\
                                <li data-id="unread">' + lang.gmailMarkUnread + '</li>\
                            </ul>\
                        </div>\
                      </div>\
                      <div class="hrgmail_readmailContent">\
                        <div class="hrgmail_readmail_text">\
                            <div class="hrgmail_message_contents"><iframe width="100%" scrolling="no" id="message-iframe-' + message.id + '" srcdoc="' + lang.gmailLoading + '...</p>"></iframe></div>\
                            <div class="hrgmail_attachmail_content"></div>\
                        </div>\
                       </div>\
                    </div>\
                ');


            var dynamic_el = $(".hrgmail_dynamic_thread_message_" + count);
            
            var from_data = getHeader(message.payload.headers, 'From');
            var from_data_split = getHeader(message.payload.headers, 'From').split('<');                        
            if(from_data_split[0] == ""){
                var from_data = from_data.replace('<',"").replace('>',"");                
            }
            
            var replyto_data = getHeader(message.payload.headers, 'Reply-To');
            var replyto_data_split = getHeader(message.payload.headers, 'Reply-To').split('<');   
            var mailed_by_split = from_data.split('@');                        
            var mailed_by = mailed_by_split[1].replace('>',"");      
                
            if(replyto_data_split[0] == ""){
                var replyto_data = replyto_data.replace('<',"").replace('>',"");                
            }

            $(".hrgmail_reply_forward_options_list").hide();

            dynamic_el.find(".hrgmail_usrProfileName span").text(from_data);
            if (getHeader(message.payload.headers, 'From') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailFrom + ':</label><span class="wz-selectable">' + from_data.replace('<','&lt;').replace('>','&gt;') + '</span></div></li>');
                if (getHeader(message.payload.headers, 'Reply-To') != '')
                dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailReplyTo + ':</label><span class="wz-selectable">' + replyto_data.replace('<','&lt;').replace('>','&gt;') + '</span></div></li>');
                if (getHeader(message.payload.headers, 'To') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailToSmall + ':</label><span class="wz-selectable">' + escapeHtml(getHeader(message.payload.headers, 'To'))  + '</span></div></li>');
                if (getHeader(message.payload.headers, 'Cc') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>cc:</label><span class="wz-selectable">' + escapeHtml(getHeader(message.payload.headers, 'Cc'))  + '</span></div></li>');
                if (getHeader(message.payload.headers, 'Date') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailDate + ':</label><span class="wz-selectable">' + gmail_full_date_formate(getHeader(message.payload.headers, 'Date')) + '</span></div></li>');
                if (getHeader(message.payload.headers, 'Subject') != '')
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>' + lang.gmailSubjectSmall + ':</label><span class="wz-selectable">' + getHeader(message.payload.headers, 'Subject') + '</span></div></li>');
                    
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label>mailed-by:</label><span class="wz-selectable">' + mailed_by + '</span></div></li>');
                if (jQuery.inArray("IMPORTANT", message.labelIds) != -1)
                    dynamic_el.find(".hrgmailmailerInfoInner ul").append('<li><div class="hrgmailmailerInner clearfix"><label class="select"><input type="checkbox">:</label><span class="wz-selectable">' + lang.gmailtoMeImportant + '</span></div></li>');
                                           
            gmail_current_account.getAvatarURL(getImageEmail, function (error, avatar) {
                
                if(error)
                    gmailErrorHandling(error);      

                if (avatar != null) {
                    console.log('avatar data: ' + avatar);
                    dynamic_el.find(".hrgmail_usrProfilePic img").attr('src', avatar);
                }                
            });
            
            append_iframe_contents(message,dynamic_el);
            
            count++;
        }
    });
}

// Add Labels
function addLabels(messageId, addLabelIds)
{
    var params = {
        "ids": messageId,
        "addLabelIds": addLabelIds
    }
    gmail_current_account.usersMessagesBatchModify(params, function (error, success) {
        if(error)
            gmailErrorHandling(error);      

        //console.log('add label callback '+ JSON.stringify(success));
    });
}

// Remove Labels
function removeLabels(messageId, removeLabelIds)
{
    var params = {
        "ids": messageId,
        "removeLabelIds": removeLabelIds
    }
    gmail_current_account.usersMessagesBatchModify(params, function (error, success) {
        if(error)
            gmailErrorHandling(error);      
        
        //console.log('remove label callback '+ JSON.stringify(success));
    });
}

// remove draft
function gmail_remove_draft(draftId)
{
    if (draftId != '') {
        gmail_current_account.usersDraftDelete(draftId, function (error, success) {
            if(error)
                gmailErrorHandling(error);      

            console.log('remove draft callback ' + JSON.stringify(success));
        });
    }
}

//show success message
function gmail_show_message(bannerTitle, bannerDescription)
{
    api.banner()
            .setTitle(bannerTitle)
            .setText(bannerDescription)
            .setIcon('https://static.inevio.com/app/522/icon.png')
            .render();
}

function getHeader(headers, index)
{
    var header = '';
    $.each(headers, function () {
        if (this.name.toLowerCase() === index.toLowerCase()) {
            header = this.value;
        }
    });
    return header.replace(/"/g, '');
}

function getBody(message)
{                
    
    console.log("inside body");

    dynamic_var['body_deferred_' + message.id] = $.Deferred();

    console.log("daferred created");   
    
    var encodedBody = '';
    if (typeof message.payload.parts === 'undefined')
    {
        if(message.payload.body.data){
                   
          encodedBody = message.payload.body.data;
          encodedBody = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
          dynamic_var['body_deferred_' + message.id].resolve(message,decodeURIComponent(escape(atob(encodedBody))));         

        }
        else if(message.payload.body.attachmentId)
        {
            dynamic_var['body_deferred_' + message.id].resolve(message,'');
//            getAttachment(message,message.payload.body.attachmentId)
//            .done(function(message,value) {
//               
//               encodedBody = value.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
//               dynamic_var['body_deferred_' + message.id].resolve(message,decodeURIComponent(escape(atob(encodedBody))));
//            });
        }
                
        
    } else
    {
        getHTMLPart(message,message.payload.parts)
        .done(function(message,value) {

            console.log("daferred data returned");

            encodedBody = value.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
            dynamic_var['body_deferred_' + message.id].resolve(message,decodeURIComponent(escape(atob(encodedBody))));
        });
    }
    return dynamic_var['body_deferred_' + message.id].promise();
}

function getHTMLPart(message,arr)
{
    console.log('getHTMLPart');
    dynamic_var['html_deferred_' + message.id] = $.Deferred();
    
    for (var x = 0; x <= arr.length; x++)
    {
        if (typeof arr[x].parts === 'undefined')
        {
            console.log('arr[x].parts undefined');
            if (arr[x].mimeType === 'text/html')
            {
                if(arr[x].body.data){
                   
                    console.log("inside data");

                  dynamic_var['html_deferred_' + message.id].resolve(message,arr[x].body.data);         
                  
                }else if(arr[x].body.attachmentId)
                {
                
                
                getAttachment(message,arr[x].body.attachmentId)
                .done(function(message,value) {
                    dynamic_var['html_deferred_' + message.id].resolve(message,value);
                });
                                                                                                       
                }
              return dynamic_var['html_deferred_' + message.id].promise();      
            }
        } else
        {
            console.log('arr[x].parts defined');
            //return getHTMLPart(message, arr[x].parts);
            
            var second_part_arr = arr[x].parts;
            
            for (var x1 = 0; x1 <= second_part_arr.length; x1++)
            {
                if (typeof second_part_arr[x1].parts === 'undefined')
                {
                    console.log('second_part_arr[x1].parts undefined');
                    if (second_part_arr[x1].mimeType === 'text/html')
                    {
                        if(second_part_arr[x1].body.data){

                          dynamic_var['html_deferred_' + message.id].resolve(message,second_part_arr[x1].body.data);         

                        }else if(second_part_arr[x1].body.attachmentId)
                        {

                            getAttachment(message,second_part_arr[x1].body.attachmentId)
                            .done(function(message,value) {
                                dynamic_var['html_deferred_' + message.id].resolve(message,value);
                            });
                        }
                    return dynamic_var['html_deferred_' + message.id].promise();      
                    }
                }else{
                    console.log('second_part_arr[x1].parts defined');
                    //third level parts
                    var third_part_arr = second_part_arr[x1].parts;
                    
                    for (var x2 = 0; x2 <= third_part_arr.length; x2++)
                    {
                        console.log('third array call');
                        if (third_part_arr[x2].mimeType === 'text/html')
                        {
                        if(third_part_arr[x2].body.data){

                          dynamic_var['html_deferred_' + message.id].resolve(message,third_part_arr[x2].body.data);         

                        }else if(third_part_arr[x2].body.attachmentId)
                        {


                        getAttachment(message,third_part_arr[x2].body.attachmentId)
                        .done(function(message,value) {
                            dynamic_var['html_deferred_' + message.id].resolve(message,value);
                        });

                        }
                      return dynamic_var['html_deferred_' + message.id].promise();      
                    }
                    }
                }
            }
        }
    }
    return '';
}


function getAttachment(message,attachmentId){

    dynamic_var['attachment_deferred_' + message.id] = $.Deferred();
    
    gmail_current_account.getAttachment(message.id, attachmentId, function(error, attach) {
        if(error)
             gmailErrorHandling(error); 

         dynamic_var['attachment_deferred_' + message.id].resolve(message,attach.data);                  
     });
     
     return dynamic_var['attachment_deferred_' + message.id].promise();
}

// get unread count
function totalCounts()
{
    // Account Badge
    updateAccountsUnreadCounter();
    
    //Inbox count
    gmail_current_account.usersLabelsGet("INBOX", function (error, messages) {
        if(error)
            gmailErrorHandling(error);      

        if (messages) {        
            if (messages.threadsUnread > 0)
                $('.INBOX span').html('<b>' + lang.gmailInbox + ' (' + messages.threadsUnread + ')</b>');
            else
                $('.INBOX span').html(lang.gmailInbox);
        }
    });

    // Spam count
    gmail_current_account.usersLabelsGet("SPAM", function (error, messages) {
        if(error)
            gmailErrorHandling(error);      

        if (messages) {
            if (messages.threadsUnread > 0)
                $('.SPAM span').html('<b>' + lang.gmailSpam + ' (' + messages.threadsUnread + ')</b>');
            else
                $('.SPAM span').html(lang.gmailSpam);
        }
    });

    // Draft count
    gmail_current_account.usersLabelsGet("DRAFT", function (error, messages) {
        if(error)
            gmailErrorHandling(error);      

        if (messages) {
            if (messages.threadsTotal > 0)
                $('.DRAFT span').html('<b>' + lang.gmailDrafts + ' (' + messages.threadsTotal + ')</b>');
            else
                $('.DRAFT span').html(lang.gmailDrafts);
        }
    });

    // CATEGORY_SOCIAL
    gmail_current_account.usersLabelsGet("CATEGORY_SOCIAL", function (error, messages) {
        if(error)
            gmailErrorHandling(error);      

        if (messages) {
            if (messages.threadsUnread > 0)
                $('.CATEGORY_SOCIAL span').html('<b>' + lang.gmailSocial + ' (' + messages.threadsUnread + ')</b>');
            else
                $('.CATEGORY_SOCIAL span').html(lang.gmailSocial);
        }
    });

    // CATEGORY_PROMOTIONS
    gmail_current_account.usersLabelsGet("CATEGORY_PROMOTIONS", function (error, messages) {
        if(error)
            gmailErrorHandling(error);      

        if (messages) {
            if (messages.threadsUnread > 0)
                $('.CATEGORY_PROMOTIONS span').html('<b>' + lang.gmailPromotions + ' (' + messages.threadsUnread + ')</b>');
            else
                $('.CATEGORY_PROMOTIONS span').html(lang.gmailPromotions);
        }
    });

    // CATEGORY_UPDATES
    gmail_current_account.usersLabelsGet("CATEGORY_UPDATES", function (error, messages) {
        if(error)
            gmailErrorHandling(error);      

        if (messages) {
            if (messages.threadsUnread > 0)
                $('.CATEGORY_UPDATES span').html('<b>' + lang.gmailUpdates + ' (' + messages.threadsUnread + ')</b>');
            else
                $('.CATEGORY_UPDATES span').html(lang.gmailUpdates);
        }
    });

    // CATEGORY_FORUMS
    gmail_current_account.usersLabelsGet("CATEGORY_FORUMS", function (error, messages) {
        if(error)
            gmailErrorHandling(error);      

        if (messages) {
            if (messages.threadsUnread > 0)
                $('.CATEGORY_FORUMS span').html('<b>' + lang.gmailForums + ' (' + messages.threadsUnread + ')</b>');
            else
                $('.CATEGORY_FORUMS span').html(lang.gmailForums);
        }
    });       
}

function gmailErrorHandling(error){
    
    console.log('Error '+ JSON.stringify(error));
    
    if(error.code && error.code == 401 && login_error == 1){
        login_error = 2;
        confirm(lang.gmailMessageSessionExpire, function (accepted) {             
            
            api.integration.gmail.listDisabledAccounts(function( err, revokedAccounts ){
            
            if( err ) 
                return console.log( 'Error al obtener las cuentas con permisos revocados\n', err );
            
            api.integration.gmail.removeAccount(revokedAccounts[0], function () {
                login_error = 1;
                gmail_show_message(lang.gmailRemoveAccountSuccessMsg, lang.gmailRemoveGmailAccountSuccessMsg);
                show_accounts();
            });                        
          });
             
        
        });
    } 
    
    return false;
}
           

function updateAccountsUnreadCounter(){
   var numberOfBadge = 0;
    api.integration.gmail.listAccounts(function (error, accounts) {
        if(error)
           gmailErrorHandling(error);   
    
        if(accounts && accounts.length > 0){
            accounts.forEach(function (account) {
                account.usersLabelsGet("INBOX", function (error, messages) {
                    if(error)
                        gmailErrorHandling(error);   
                    
                    if(messages && messages.threadsUnread>0){ 
                        $('.unreadCount-' + account.id).text(messages.threadsUnread);
                        numberOfBadge = numberOfBadge + messages.threadsUnread;
                    } else {
                        $('.unreadCount-' + account.id).text('');
                    }
                    
                    api.app.setBadge(numberOfBadge);
                });
            });
        }

    });
}



// Show error messages
function showError(message, errorType)
{
    if (errorType == 1) {
        $(".mailsuccess").text(message);
        $(".mailsuccess").css("display", "block");
    } else if (errorType == 2) {
        $(".mailerror").text(message);
        $(".mailerror").css("display", "block");
    }
}

// Hide error messages
function hideError()
{
    setTimeout(function () {
        $(".mailsuccess").css("display", "none");
        $(".mailerror").css("display", "none");
    }, 3000);
}

function dateFormate(date)
{
    var returnDate = '';
    var currentDay = $.format.date(new Date(), "d");
    var messageDay = $.format.toBrowserTimeZone(date, "d");
    var currentMonth = $.format.date(new Date(), "M");
    var messageMonth = $.format.toBrowserTimeZone(date, "M");
    var currentYear = $.format.date(new Date(), "yyyy");
    var messageYear = $.format.toBrowserTimeZone(date, "yyyy");

    if (currentDay == messageDay && currentMonth == messageMonth && currentYear == messageYear) {
        returnDate = $.format.toBrowserTimeZone(date, "h:mm a");
    } else if (currentYear == messageYear) {
        returnDate = $.format.toBrowserTimeZone(date, "MMM d");
    } else if (currentYear > messageYear) {
        returnDate = $.format.toBrowserTimeZone(date, "M/d/yy");
    }
    return returnDate;
}

function gmail_full_date_formate(date)
{
    var returnDate = $.format.toBrowserTimeZone(date, "E, MMM d, yyyy");
    returnDate += " at ";
    returnDate += $.format.toBrowserTimeZone(date, "h:mm a");
    return returnDate;
}

function bytesToSize(bytes)
{
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0)
        return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

function getSubStr(data, length)
{
    if (data.length > length) {
        data = data.substr(0, length) + '...';
    }
    return data;
}

function htmlEntities(str) {
    return String(str).replace(/"/g, '').replace(/'/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function getCaretCharacterOffsetWithin(element) {
    var caretOffset = 0;
    var doc = element.ownerDocument || element.document;
    var win = doc.defaultView || doc.parentWindow;
    var sel;
    if (typeof win.getSelection != "undefined") {
        var range = win.getSelection().getRangeAt(0);
        var preCaretRange = range.cloneRange();        
        preCaretRange.selectNode(element);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        caretOffset = preCaretRange.toString().length;
    } else if ((sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange();
        var preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}

function setGmailBoxPosition(type){
    
    if(type == 1){
        gmail_win.on(".wz-app-522").css({'width': '464px', 'min-width': '464px', 'margin-left': '0'});
        $(".accountNotRegister").show();
        $(".accountRegistered").hide();
    }else if(type == 2){
        gmail_win.on(".wz-app-522").css({'width': '864px', 'min-width': '864px'});                    
        $(".accountNotRegister").hide();
        $(".accountRegistered").show();
    }
    
    var desktop_width = gmail_win.on(".wz-app-522").parents("#wz-desktop").width()
    var window_width = gmail_win.width();
    var positionX = parseInt((desktop_width - window_width) / 2);

    var desktop_height = gmail_win.on(".wz-app-522").parents("#wz-desktop").height()
    var window_height = gmail_win.height();
    var positionY = parseInt((desktop_height - window_height) / 2);
    
    api.view.setPosition(positionX, positionY);
}

function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };

  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

/*! jquery-dateFormat */
var DateFormat = {};
!function (a) {
    var b = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], c = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], d = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], f = {Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"}, g = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[Z\-+]?(\d{2}:?\d{2})?/;
    a.format = function () {
        function a(a) {
            return b[parseInt(a, 10)] || a
        }
        function h(a) {
            return c[parseInt(a, 10)] || a
        }
        function i(a) {
            var b = parseInt(a, 10) - 1;
            return d[b] || a
        }
        function j(a) {
            var b = parseInt(a, 10) - 1;
            return e[b] || a
        }
        function k(a) {
            return f[a] || a
        }
        function l(a) {
            var b, c, d, e, f, g = a, h = "";
            return-1 !== g.indexOf(".") && (e = g.split("."), g = e[0], h = e[e.length - 1]), f = g.split(":"), 3 === f.length ? (b = f[0], c = f[1], d = f[2].replace(/\s.+/, "").replace(/[a-z]/gi, ""), g = g.replace(/\s.+/, "").replace(/[a-z]/gi, ""), {time: g, hour: b, minute: c, second: d, millis: h}) : {time: "", hour: "", minute: "", second: "", millis: ""}
        }
        function m(a, b) {
            for (var c = b - String(a).length, d = 0; c > d; d++)
                a = "0" + a;
            return a
        }
        return{parseDate: function (a) {
                var b, c, d = {date: null, year: null, month: null, dayOfMonth: null, dayOfWeek: null, time: null};
                if ("number" == typeof a)
                    return this.parseDate(new Date(a));
                if ("function" == typeof a.getFullYear)
                    d.year = String(a.getFullYear()), d.month = String(a.getMonth() + 1), d.dayOfMonth = String(a.getDate()), d.time = l(a.toTimeString() + "." + a.getMilliseconds());
                else if (-1 != a.search(g))
                    b = a.split(/[T\+-]/), d.year = b[0], d.month = b[1], d.dayOfMonth = b[2], d.time = l(b[3].split(".")[0]);
                else
                    switch (b = a.split(" "), 6 === b.length && isNaN(b[5]) && (b[b.length] = "()"), b.length) {
                        case 6:
                            d.year = b[5], d.month = k(b[1]), d.dayOfMonth = b[2], d.time = l(b[3]);
                            break;
                            case 2:
                            c = b[0].split("-"), d.year = c[0], d.month = c[1], d.dayOfMonth = c[2], d.time = l(b[1]);
                            break;
                            case 7:
                        case 9:
                        case 10:
                            d.year = b[3], d.month = k(b[1]), d.dayOfMonth = b[2], d.time = l(b[4]);
                            break;
                            case 1:
                            c = b[0].split(""), d.year = c[0] + c[1] + c[2] + c[3], d.month = c[5] + c[6], d.dayOfMonth = c[8] + c[9], d.time = l(c[13] + c[14] + c[15] + c[16] + c[17] + c[18] + c[19] + c[20]);
                            break;
                            default:
                            return null
                        }
                return d.date = d.time ? new Date(d.year, d.month - 1, d.dayOfMonth, d.time.hour, d.time.minute, d.time.second, d.time.millis) : new Date(d.year, d.month - 1, d.dayOfMonth), d.dayOfWeek = String(d.date.getDay()), d
            }, date: function (b, c) {
                try {
                    var d = this.parseDate(b);
                    if (null === d)
                        return b;
                    for (var e, f = d.year, g = d.month, k = d.dayOfMonth, l = d.dayOfWeek, n = d.time, o = "", p = "", q = "", r = !1, s = 0; s < c.length; s++) {
                        var t = c.charAt(s), u = c.charAt(s + 1);
                        if (r)
                            "'" == t ? (p += "" === o ? "'" : o, o = "", r = !1) : o += t;
                        else
                            switch (o += t, q = "", o) {
                                case"ddd":
                                    p += a(l), o = "";
                                    break;
                                    case"dd":
                                    if ("d" === u)
                                        break;
                                    p += m(k, 2), o = "";
                                    break;
                                    case"d":
                                    if ("d" === u)
                                        break;
                                    p += parseInt(k, 10), o = "";
                                    break;
                                    case"D":
                                    k = 1 == k || 21 == k || 31 == k ? parseInt(k, 10) + "st" : 2 == k || 22 == k ? parseInt(k, 10) + "nd" : 3 == k || 23 == k ? parseInt(k, 10) + "rd" : parseInt(k, 10) + "th", p += k, o = "";
                                    break;
                                    case"MMMM":
                                    p += j(g), o = "";
                                    break;
                                    case"MMM":
                                    if ("M" === u)
                                        break;
                                    p += i(g), o = "";
                                    break;
                                    case"MM":
                                    if ("M" === u)
                                        break;
                                    p += m(g, 2), o = "";
                                    break;
                                    case"M":
                                    if ("M" === u)
                                        break;
                                    p += parseInt(g, 10), o = "";
                                    break;
                                    case"y":
                                case"yyy":
                                    if ("y" === u)
                                        break;
                                    p += o, o = "";
                                    break;
                                    case"yy":
                                    if ("y" === u)
                                        break;
                                    p += String(f).slice(-2), o = "";
                                    break;
                                    case"yyyy":
                                    p += f, o = "";
                                    break;
                                    case"HH":
                                    p += m(n.hour, 2), o = "";
                                    break;
                                    case"H":
                                    if ("H" === u)
                                        break;
                                    p += parseInt(n.hour, 10), o = "";
                                    break;
                                    case"hh":
                                    e = 0 === parseInt(n.hour, 10) ? 12 : n.hour < 13 ? n.hour : n.hour - 12, p += m(e, 2), o = "";
                                    break;
                                    case"h":
                                    if ("h" === u)
                                        break;
                                    e = 0 === parseInt(n.hour, 10) ? 12 : n.hour < 13 ? n.hour : n.hour - 12, p += parseInt(e, 10), o = "";
                                    break;
                                    case"mm":
                                    p += m(n.minute, 2), o = "";
                                    break;
                                    case"m":
                                    if ("m" === u)
                                        break;
                                    p += n.minute, o = "";
                                    break;
                                    case"ss":
                                    p += m(n.second.substring(0, 2), 2), o = "";
                                    break;
                                    case"s":
                                    if ("s" === u)
                                        break;
                                    p += n.second, o = "";
                                    break;
                                    case"S":
                                case"SS":
                                    if ("S" === u)
                                        break;
                                    p += o, o = "";
                                    break;
                                    case"SSS":
                                    var v = "000" + n.millis.substring(0, 3);
                                    p += v.substring(v.length - 3), o = "";
                                    break;
                                    case"a":
                                    p += n.hour >= 12 ? "PM" : "AM", o = "";
                                    break;
                                    case"p":
                                    p += n.hour >= 12 ? "p.m." : "a.m.", o = "";
                                    break;
                                    case"E":
                                    p += h(l), o = "";
                                    break;
                                    case"'":
                                    o = "", r = !0;
                                    break;
                                    default:
                                    p += t, o = ""
                                    }
                    }
                    return p += q
                } catch (w) {
                    return console && console.log && console.log(w), b
                }
            }, prettyDate: function (a) {
                var b, c, d;
                return("string" == typeof a || "number" == typeof a) && (b = new Date(a)), "object" == typeof a && (b = new Date(a.toString())), c = ((new Date).getTime() - b.getTime()) / 1e3, d = Math.floor(c / 86400), isNaN(d) || 0 > d ? void 0 : 60 > c ? "just now" : 120 > c ? "1 minute ago" : 3600 > c ? Math.floor(c / 60) + " minutes ago" : 7200 > c ? "1 hour ago" : 86400 > c ? Math.floor(c / 3600) + " hours ago" : 1 === d ? "Yesterday" : 7 > d ? d + " days ago" : 31 > d ? Math.ceil(d / 7) + " weeks ago" : d >= 31 ? "more than 5 weeks ago" : void 0
            }, toBrowserTimeZone: function (a, b) {
                return this.date(new Date(a), b || "MM/dd/yyyy HH:mm:ss")
            }}
    }()
}(DateFormat), function (a) {
    a.format = DateFormat.format
}(jQuery);
/*! jquery-dateFormat */
