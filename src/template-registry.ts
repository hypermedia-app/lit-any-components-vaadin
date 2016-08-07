import {promises as jsonld} from 'jsonld';

var templates = [];

export var TemplateRegistryAccess = {
    properties: {
        templates: {
            type: Array,
            notify: true,
            readOnly: true,
            value: templates
        }
    }
};

var TemplateStamper = {
    getStamped: function(objectView, template, object) {
        this.templatize(template);

        if(template.compactWith) {
            return jsonld.compact(object, template.compactWith)
                .then(compacted => stamp.call(this, objectView, template, compacted));
        } else {
            return Promise.resolve(stamp.call(this, objectView, template, object));
        }
    }
};

export var AgsTemplate = {
    properties: {
        as: {
            type: String,
            value: 'model'
        },
        compactWith: {
            type: Object,
            value: null
        },
        name: {
            type: String,
            value: ''
        },
        predicate: {
            type: String,
            value: null
        },
        scope: {
            type: String,
            value: ''
        }
    },

    attached: function() {
        this.push('templates', this);
        this.fire('ags-templates-changed', { templates: this.templates }, { bubbles: true });
    },

    detached: function() {
        this.pop('templates', this);
        document.dispatchEvent(new CustomEvent('ags-templates-changed', {
            detail: { templates: this.templates }
        }));
    },

    isMatch: function(object, predicate, scope) {
        var objectMatches, predicateMatches, isScopeMatch;

        objectMatches = this.objectMatches(object);
        predicateMatches = this.predicateMatches(predicate);
        isScopeMatch = scopeMatches.call(this, scope);

        return objectMatches && predicateMatches && isScopeMatch;
    },

    objectMatches: function(object) {
        return true;
    },

    predicateMatches: function(predicate) {
        if(this.predicate){
            return this.predicate == predicate;
        }

        return true;
    }
};

function scopeMatches(scope) {
    return this.scope == scope;
}

function stamp(objectView, template, object) {
    var stampedModel = { };
    stampedModel[template.as] = object;
    stampedModel.predicate = this.predicate;
    stampedModel.params = objectView.params;

    return this.stamp(stampedModel).root;
}

export var RegisteredTemplate = [ AgsTemplate, TemplateRegistryAccess ];
export var RegisteredTemplateConsumer = [ Polymer.Templatizer, TemplateStamper, TemplateRegistryAccess ];