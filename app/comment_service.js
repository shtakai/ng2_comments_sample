System.register(['angular2/core', './comment'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, comment_1;
    var CommentService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (comment_1_1) {
                comment_1 = comment_1_1;
            }],
        execute: function() {
            CommentService = (function () {
                function CommentService() {
                    this.comments = [
                        new comment_1.Comment({ id: 1, author: "Pete Hunt", text: "This is one comment" }),
                        new comment_1.Comment({ id: 2, author: "Jordan Walke", text: "This is *another* comment" })
                    ];
                }
                CommentService.prototype.fetchComments = function () {
                    console.log('[CommentService] fetchComments');
                    return Promise.resolve(this.comments);
                };
                CommentService.prototype.add = function (comment) {
                    this.comments.push(comment);
                    console.log(this.comments);
                };
                CommentService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CommentService);
                return CommentService;
            })();
            exports_1("CommentService", CommentService);
        }
    }
});
//# sourceMappingURL=comment_service.js.map